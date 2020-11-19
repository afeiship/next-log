(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.log', function () {
      const obj1 = { name: 'fei' };
      const obj2 = { email: '1290657123@qq.com' };
      nx.log(obj1);
      expect(true).toBe(true);
    });
  });
})();
