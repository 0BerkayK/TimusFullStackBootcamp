function validateEmployeeData(req, res, next) {
    const { name, age, stillEmployee } = req.body;
  
    if (!name || !age || stillEmployee === undefined) {
      return res.status(400).json({ error: 'name, age ve stillEmployee zorunludur.' });
    }
  
    if (typeof name !== 'string' || typeof age !== 'number' || typeof stillEmployee !== 'boolean') {
      return res.status(400).json({ error: 'name string, age number ve stillEmployee boolean olmalıdır.' });
    }
  
    next();
}

module.exports = {
    validateEmployeeData
};