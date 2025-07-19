import React, { useState } from 'react';
import ReadingForm from './components/ReadingForm';
import LineShareModal from './components/LineShareModal';
import { ReadingFormData } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFormData, setCurrentFormData] = useState<ReadingFormData | null>(null);

  const handleFormSubmit = (data: ReadingFormData) => {
    setCurrentFormData(data);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentFormData(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* ヘッダー */}
      <div style={{
        textAlign: 'center',
        marginBottom: '32px',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          margin: '0 0 8px 0'
        }}>
          📚 1段読書
        </h1>
        <p style={{
          fontSize: '18px',
          margin: '0 0 4px 0',
          opacity: 0.9
        }}>
          1日1章、無理なら1段落。それでも十分。
        </p>
        <p style={{
          fontSize: '14px',
          margin: 0,
          opacity: 0.8
        }}>
          「完璧じゃなくていい。1ページの前進が、思考と行動を変えていく。」
        </p>
      </div>

      {/* メインフォーム */}
      <ReadingForm onSubmit={handleFormSubmit} />

      {/* フッター */}
      <div style={{
        marginTop: '32px',
        textAlign: 'center',
        color: 'white',
        opacity: 0.7,
        fontSize: '12px'
      }}>
        <p style={{ margin: 0 }}>
          🌱 読書を続けられない → 「1章 or 1段落だけ」を推奨
        </p>
        <p style={{ margin: '4px 0 0 0' }}>
          💡 読んでも内容が残らない → 学びを一言で記録 → 行動につなげる
        </p>
      </div>

      {/* LINEシェアモーダル */}
      {currentFormData && (
        <LineShareModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={currentFormData}
        />
      )}
    </div>
  );
}

export default App;