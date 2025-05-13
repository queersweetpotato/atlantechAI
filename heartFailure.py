from xgboost import XGBRFRegressor
from xgboost import XGBRegressor
#from numpy import asarray
from numpy import absolute
from sklearn.datasets import fetch_openml 
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import RepeatedKFold
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import train_test_split
from sklearn.metrics import *

#fetch dataset and split it into training and label data
data = fetch_openml(data_id=45949)

#the dataset does not have a defined target column, hence I have decided to use death event
y = data['data']['DEATH_EVENT']
#need to delete final column from the data bit
del data['data']['DEATH_EVENT']
X = data['data']
X_train, X_test, y_train, y_test = train_test_split(X, y)
print(X)

#define model
#model = XGBRFRegressor(eval_metric='rmsle')
#model = XGBRFRegressor()
model = XGBRFRegressor(eval_metric='rmsle', learning_rate= 0.7, max_depth= 12, n_estimators= 50)

#find the best hyper parameters

"""
#set up our search grid
param_grid = {"max_depth":    [4, 6, 10, 12],
              "n_estimators": [50, 100, 200, 300],
              "learning_rate": [0.1, 0.3, 0.5, 0.7]}

# try out every combination of the above values
search = GridSearchCV(model, param_grid, refit=True, cv=5).fit(X_train, y_train)

print("The best hyperparameters are ",search.best_params_)

#evaluate the model

#define model evaluation method
cv = RepeatedKFold(n_splits=10, n_repeats=3, random_state=1)
#evaluate model
scores = cross_val_score(model, X_train, y_train, scoring='neg_mean_absolute_error', cv=cv, n_jobs=-1)
#force scores to be positive
scores = absolute(scores)
print('Mean MAE: %.3f (%.3f)' % (scores.mean(), scores.std()) )
"""

#train the model
model.fit(X_train, y_train)

#predict
preds = model.predict(X_test)
print(preds)
print(y_test)
