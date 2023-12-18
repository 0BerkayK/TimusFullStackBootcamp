const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateTokenAndEmail(req, res, next) {
  const token = req.headers.authorization;
  const userEmail = req.headers.useremail;

  // Token ve userEmail var mı kontrolü
  if (!token || !userEmail) {
    return res.status(401).json({ error: 'Token ve userEmail zorunludur.' });
  }

  // Token uzunluğu kontrolü
  if (token.length < 12) {
    return res.status(401).json({ error: 'Token en az 12 karakter olmalıdır.' });
  }

  // userEmail format kontrolü
  if (!emailRegex.test(userEmail)) {
    return res.status(401).json({ error: 'Geçersiz userEmail formatı.' });
  }

  // Tüm kontrolleri geçerse bir sonraki middleware'e veya route'a devam et
  next();
}

module.exports = {
  validateTokenAndEmail
};
