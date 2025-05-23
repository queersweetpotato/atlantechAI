from xgboost import XGBRFRegressor
from numpy import asarray

#takes in a list
def predictUserHealth(data):
  deathData = asarray([data[:12]])
  heartData = asarray([data])
 
  #load models
  try:
    heartModel = XGBRFRegressor()
    heartModel.load_model("./heartEvent.ubj")
    heartModel.set_params(tree_method="hist", predictor="cpu_predictor")
    deathModel = XGBRFRegressor()
    deathModel.load_model("./death.ubj")
    deathModel.set_params(tree_method="hist", predictor="cpu_predictor")
  except Exception as e:
    print(f"Error: {e}")
 
  #first value is probability of heart problems, second is the probability of death assuming heart failure
  returnValues = [heartModel.predict(heartData), deathModel.predict(deathData)]
  
  return returnValues

print(predictUserHealth([80,None,None,1,None,None,None,None,None,0,0,None,0,0,0.5,0,0,None,None,None,0,None,None,None,None,None,None,None,None,None,1,0,8,0,0,0,0,0]))
