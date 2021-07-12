import Swal from 'sweetalert2';

const ucWords = (string) => (`${string} `)
  .replace(/^(.)|\s+(.)/g, ($1) => $1.toUpperCase());

const showAlert = (message, type) => {
  const title = (type === 'success') ? 'Yosh!' : 'Oops!';
  Swal.fire(title, message, type);
};

const alertNetwork = () => {
  if (!navigator.onLine) {
    Swal.fire('Oops', 'Please check your internet connection!', 'warning');
  }
};

export { ucWords, alertNetwork, showAlert };
