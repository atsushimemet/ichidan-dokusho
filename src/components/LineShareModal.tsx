import React from 'react';
import { ReadingFormData } from '../types';

interface LineShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ReadingFormData;
}

const LineShareModal: React.FC<LineShareModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const generateLineMessage = () => {
    return `📚『${data.bookTitle}』 ${data.readingAmount}読了  
📝今日の学び：${data.learning}  
🎯明日のアクション：${data.tomorrowAction}  
#1段読書 #今日の学び`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateLineMessage());
      alert('LINEメッセージをクリップボードにコピーしました！');
    } catch (err) {
      console.error('コピーに失敗しました:', err);
      alert('コピーに失敗しました。手動でテキストを選択してコピーしてください。');
    }
  };

  const openLine = () => {
    const message = encodeURIComponent(generateLineMessage());
    // LINEアプリが利用可能な場合はアプリを開く、そうでなければWebを開く
    const lineUrl = `https://line.me/R/msg/text/?${message}`;
    window.open(lineUrl, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h3 style={{
            margin: 0,
            color: '#333',
            fontSize: '20px'
          }}>
            📱 LINEで共有
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>

        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #e9ecef'
        }}>
          <h4 style={{
            margin: '0 0 12px 0',
            color: '#495057',
            fontSize: '14px'
          }}>
            📩 送信メッセージプレビュー
          </h4>
          <pre style={{
            margin: 0,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#212529',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}>
            {generateLineMessage()}
          </pre>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <button
            onClick={openLine}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#00c300',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            📱 LINEで送信
          </button>
          
          <button
            onClick={copyToClipboard}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            📋 クリップボードにコピー
          </button>
        </div>

        <div style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: '#e3f2fd',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#0277bd'
        }}>
          💡 ヒント: 事前に「1段読書」という名前の1人グループを作成しておくと便利です
        </div>
      </div>
    </div>
  );
};

export default LineShareModal;