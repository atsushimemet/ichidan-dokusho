import React, { useState } from 'react';
import { ReadingFormData, ReadingAmount } from '../types';

interface ReadingFormProps {
  onSubmit: (data: ReadingFormData) => void;
}

const ReadingForm: React.FC<ReadingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ReadingFormData>({
    bookTitle: '',
    readingAmount: '1段落',
    learning: '',
    tomorrowAction: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleAmountChange = (amount: ReadingAmount) => {
    setFormData({ ...formData, readingAmount: amount });
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '24px',
        color: '#333',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        📖 今日も1段、読んだ？
      </h2>
      
      <form onSubmit={handleSubmit}>
        {/* 本のタイトル */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            1. 読んだ本のタイトル
          </label>
          <input
            type="text"
            value={formData.bookTitle}
            onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
            placeholder="例：『7つの習慣』"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        {/* 読んだ量 */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            2. 今日読んだ量
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(['1章', '1段落', '1文だけ'] as ReadingAmount[]).map((amount) => (
              <label key={amount} style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                backgroundColor: formData.readingAmount === amount ? '#f0f4ff' : 'transparent',
                border: formData.readingAmount === amount ? '2px solid #667eea' : '2px solid transparent'
              }}>
                <input
                  type="radio"
                  name="readingAmount"
                  value={amount}
                  checked={formData.readingAmount === amount}
                  onChange={() => handleAmountChange(amount)}
                  style={{ marginRight: '8px' }}
                />
                {amount}
              </label>
            ))}
          </div>
        </div>

        {/* 今日の学び */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            3. 今日の学び or 気づき
          </label>
          <textarea
            value={formData.learning}
            onChange={(e) => setFormData({ ...formData, learning: e.target.value })}
            placeholder="例：「人の話を聴くとは、同意することではない」"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '16px',
              minHeight: '80px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        {/* 明日のアクション */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            4. 明日の小さなアクション
          </label>
          <textarea
            value={formData.tomorrowAction}
            onChange={(e) => setFormData({ ...formData, tomorrowAction: e.target.value })}
            placeholder="例：「朝会で相手の話をさえぎらずに聞く」"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e1e5e9',
              borderRadius: '8px',
              fontSize: '16px',
              minHeight: '80px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6fd8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
        >
          ✅ 完了 → LINEで送る
        </button>
      </form>
    </div>
  );
};

export default ReadingForm;