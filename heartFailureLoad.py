# XGBoost imports
from xgboost import XGBRFRegressor
from xgboost import XGBRegressor
from sklearn.datasets import fetch_openml 
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import RepeatedKFold
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import train_test_split

# Obtaining data for the model

#fetch dataset and split it into training and label data
data = fetch_openml(data_id=45949)

#the dataset does not have a defined target column, hence I have decided to use death event
y = data['data']['DEATH_EVENT']
#need to delete final column from the data bit
del data['data']['DEATH_EVENT']
X = data['data']
X_train, X_test, y_train, y_test = train_test_split(X, y)

# Loading a saved model
model = XGBRFRegressor()
model.load_model("heartFailure.ubj");

# Predicting the test dataset using the loaded model
preds = model.predict(X_test)
print(preds)
print(y_test)

