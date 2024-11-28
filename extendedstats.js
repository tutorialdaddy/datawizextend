const DataWizJS = require('datawizjs');
const { standardDeviation, variance } = require('simple-statistics');

class DataWizJS {
  static analyze(data) {
    return {
      mean: mean(data),
      median: median(data),
      mode: mode(data),
    };
  }

  static async visualize(data, filename) {
    const trace = {
      y: data,
      type: 'box'
    };
    const figure = { 'data': [trace] };

    const imgOpts = {
      format: 'png',
      width: 1000,
      height: 500
    };

    return new Promise((resolve, reject) => {
      plotly.getImage(figure, imgOpts, function (error, imageStream) {
        if (error) return reject(error);

        const fileStream = fs.createWriteStream(filename);
        imageStream.pipe(fileStream);
        resolve(`Visualization saved as ${filename}`);
      });
    });
  }
}

module.exports = DataWizExtend1;

class DataWizExtend extends DataWizJS {
  static complexAnalyze(data) {
    const basicAnalysis = super.analyze(data);
    return {
      ...basicAnalysis,
      standardDeviation: standardDeviation(data),
      variance: variance(data)
    };
  }
}

module.exports = DataWizExtend2;
