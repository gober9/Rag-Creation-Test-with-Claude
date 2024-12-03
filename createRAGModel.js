const { Llama } = require("llama");
const shap = require("shap");

const model = new Llama({
  modelPath: "path/to/llama/model",
  tokenizerPath: "path/to/llama/tokenizer"
});

const shapExplainer = new shap.Explainer(model);

async function createRAGModel() {
  const input = "Your input text here";
  const output = await model.generate(input);
  const explanation = shapExplainer.explain(input);

  console.log("Model Output:", output);
  console.log("Model Explanation:", explanation);
}

createRAGModel();