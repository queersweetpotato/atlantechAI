# XGBoost imports
from xgboost import XGBRFRegressor
from xgboost import XGBRegressor

def predict(inputs):

    # Loading a saved model
    model = XGBRFRegressor()
    model.load_model("heartFailure.ubj");

    return model.predict(inputs)

# Predicting the test dataset using the loaded model
#preds = model.predict(X_test)
#print(preds)
#print(y_test)

if __name__=="__main__":
    print(predict([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]))
