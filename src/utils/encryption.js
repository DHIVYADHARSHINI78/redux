import CryptoJS from 'crypto-js';
//This key is used to lock and unlock the data. Same key must encrypt AND decrypt.
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

export const encrypt = (data) => {
  if (!data) return '';
  const text = typeof data === 'string' ? data : JSON.stringify(data);
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decrypt = (cipherText) => {
  if (!cipherText) return '';
  try {
    const bytes  = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const result = bytes.toString(CryptoJS.enc.Utf8);
    // Try JSON parse — if fails return as string
    try { return JSON.parse(result); } 
    catch { return result; }
  } catch {
    return '';
  }
};