from xgboost import XGBRFRegressor
from numpy import asarray

heartModel = XGBRFRegressor()
heartModel.load_model("heartEvent.ubj");
deathModel = XGBRFRegressor()
deathModel.load_model("death.ubj");

#idk exactly how the data is getting here, but it should ideally be in the form of a list, here is just placeholder data
ogData = [80,None,None,1,None,None,None,None,None,0,0,None,0,0,0.5,0,0,None,None,None,0,None,None,None,None,None,None,None,None,None,None,None,None,1,0,8,0,0,0,0,0,0]
data = asarray([ogData])
print("The chance of heart problems is: ", heartModel.predict(data))

#idk man the slicing is behaving strangely so I've decided to do it sillily
deathData = asarray([ogData[:12]])
print("Assuming heart failure occurs, the chance of death is: ", deathModel.predict(deathData))

