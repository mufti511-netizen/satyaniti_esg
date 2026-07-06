import axios from 'axios';

// Menentukan alamat base URL API backend Anda nanti
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const ContactModel = {
  /**
   * Mengirim data form kontak korporasi ke database melalui API backend
   * @param {Object} formData 
   */
  async submitProposalRequest(formData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        interest: formData.interest,
        message: formData.message,
        submitted_at: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      console.error("Error saving contact form data to database:", error);
      throw error;
    }
  }
};