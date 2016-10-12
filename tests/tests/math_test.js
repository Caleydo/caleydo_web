define(["require", "exports", 'math'], function (require, exports, math) {
  exports.test = function(){

    QUnit.module('math', function() {

      QUnit.test('Object.keys', function(assert) {
        assert.deepEqual(Object.keys(math).sort(), [
          "categoricalHist",
          "computeStats",
          "hist",
          "rangeHist",
          "wrapHist"
        ]);
      });

      /* TODO: Add at least one test for math.categoricalHist
      QUnit.module('categoricalHist', function() {
        QUnit.test('???', function(assert) {
          assert.equal(math.categoricalHist(), '???');
        });
      })
      */

      QUnit.module('computeStats', function() {
        function assert_stats(input, expected) {
          QUnit.test(input, function(assert) {
            var stats = math.computeStats(input);
            var clean = {};
            for (prop in stats) {
              if (stats.hasOwnProperty(prop)) {
                clean[prop] = stats[prop];
              }
            }
            assert.deepEqual(clean, expected);
            // You can't in general expect equality to work on floats,
            // but the examples are simple enough that it works.
          });
        }
        assert_stats([1],
          {
            "_var": 0,
            "max": 1,
            "mean": 1,
            "min": 1,
            "moment2": 0,
            "moment3": 0,
            "moment4": 0,
            "n": 1,
            "nans": 0,
            "sum": 1
          }
        );
        assert_stats([1,1],
          {
            "_var": 0,
            "max": 1,
            "mean": 1,
            "min": 1,
            "moment2": 0,
            "moment3": 0,
            "moment4": 0,
            "n": 2,
            "nans": 0,
            "sum": 2
          }
        );
        assert_stats([-1,1],
          {
            "_var": 2,
            "max": 1,
            "mean": 0,
            "min": -1,
            "moment2": 2,
            "moment3": 0,
            "moment4": 2,
            "n": 2,
            "nans": 0,
            "sum": 0
          }
        );
      });

      /* TODO: Add at least one test for math.hist
      QUnit.module('hist', function() {
        QUnit.test('???', function(assert) {
          assert.equal(math.hist(), '???');
        });
      })
      */

      /* TODO: Add at least one test for math.rangeHist
      QUnit.module('rangeHist', function() {
        QUnit.test('???', function(assert) {
          assert.equal(math.rangeHist(), '???');
        });
      })
      */

      /* TODO: Add at least one test for math.wrapHist
      QUnit.module('wrapHist', function() {
        QUnit.test('???', function(assert) {
          assert.equal(math.wrapHist(), '???');
        });
      })
      */



    });

  }
});
