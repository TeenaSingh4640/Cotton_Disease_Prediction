from fastapi import APIRouter
from fastapi.responses import JSONResponse
import base64
import io
import numpy as np
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, roc_curve, auc
import matplotlib.pyplot as plt

router = APIRouter()

# Dummy data for demonstration (replace with real model and data)
y_true = np.array([0, 1, 1, 0, 1, 0, 1, 0, 1, 0])
y_pred = np.array([0, 1, 0, 0, 1, 0, 1, 1, 1, 0])
y_score = np.array([0.1, 0.9, 0.4, 0.2, 0.8, 0.3, 0.7, 0.6, 0.9, 0.2])


def plot_to_base64(fig):
    buf = io.BytesIO()
    fig.savefig(buf, format='png', bbox_inches='tight')
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode('utf-8')
    plt.close(fig)
    return img_base64

@router.get('/analysis/summary')
def analysis_summary():
    # Metrics
    accuracy = accuracy_score(y_true, y_pred)
    precision = precision_score(y_true, y_pred)
    recall = recall_score(y_true, y_pred)
    f1 = f1_score(y_true, y_pred)
    cm = confusion_matrix(y_true, y_pred)
    fpr, tpr, _ = roc_curve(y_true, y_score)
    roc_auc = auc(fpr, tpr)

    # Confusion Matrix Plot
    fig_cm, ax_cm = plt.subplots()
    ax_cm.matshow(cm, cmap=plt.cm.Blues, alpha=0.7)
    for i in range(cm.shape[0]):
        for j in range(cm.shape[1]):
            ax_cm.text(x=j, y=i, s=cm[i, j], va='center', ha='center')
    plt.xlabel('Predicted')
    plt.ylabel('True')
    plt.title('Confusion Matrix')
    cm_img = plot_to_base64(fig_cm)

    # ROC Curve Plot
    fig_roc, ax_roc = plt.subplots()
    ax_roc.plot(fpr, tpr, label=f'ROC curve (area = {roc_auc:.2f})')
    ax_roc.plot([0, 1], [0, 1], 'k--')
    plt.xlabel('False Positive Rate')
    plt.ylabel('True Positive Rate')
    plt.title('ROC Curve')
    plt.legend(loc='lower right')
    roc_img = plot_to_base64(fig_roc)

    # Summary
    summary = (
        f"Model achieved an accuracy of {accuracy:.2f}, precision of {precision:.2f}, "
        f"recall of {recall:.2f}, and F1-score of {f1:.2f}. The ROC AUC is {roc_auc:.2f}."
    )

    return JSONResponse({
        'metrics': {
            'accuracy': accuracy,
            'precision': precision,
            'recall': recall,
            'f1_score': f1,
            'roc_auc': roc_auc
        },
        'graphs': {
            'confusion_matrix': cm_img,
            'roc_curve': roc_img
        },
        'summary': summary
    }) 