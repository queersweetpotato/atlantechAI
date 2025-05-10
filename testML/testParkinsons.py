from xgboost import XGBRFRegressor
from xgboost import XGBRegressor
from numpy import asarray, delete
from pandas import read_csv
from numpy import absolute
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import RepeatedKFold
from sklearn.model_selection import GridSearchCV

#read in data, separate into training (X) and target (y) data
df = read_csv("parkinsonsData3.csv", header=None)
data = df.values
X, y = data[:-1, 1:], data[:-1, 0]

#test prints to ensure the data is split properly
#print(X)
#print(y)

#define model as xgboost regressor NO IDEA WHAT THE EVAL METRIC MEANS
#model = XGBRFRegressor(eval_metric='rmsle')
model = XGBRFRegressor(learning_rate= 0.4, max_depth= 4, n_estimators= 200)
#model = XGBRegressor(eval_metric='rmsle')


#find the best hyper parameters

"""
#set up our search grid
param_grid = {"max_depth":    [2, 3, 4],
              "n_estimators": [100, 150, 200, 250, 300],
              "learning_rate": [0.35, 0.4, 0.45, 0.5]}

# try out every combination of the above values
search = GridSearchCV(model, param_grid, cv=5).fit(X, y)

print("The best hyperparameters are ",search.best_params_)
"""
"""
#evaluate the model NEED TO UNDERSTAND THIS BIT

#define model evaluation method
cv = RepeatedKFold(n_splits=10, n_repeats=3, random_state=1)
#evaluate model
scores = cross_val_score(model, X, y, scoring='neg_mean_absolute_error', cv=cv, n_jobs=-1)
#force scores to be positive
scores = absolute(scores)
print('Mean MAE: %.3f (%.3f)' % (scores.mean(), scores.std()) )
"""

#fit the model to the data
model.fit(X, y)

#test it, this row should result in 0 as the answer
data = [214.289,260.277,77.973,0.00567,0.00003,0.00295,0.00317,0.00885,0.01884,0.19,0.01026,0.01161,0.01373,0.03078,0.04398,21.209,0.462803,0.664357,-5.724056,0.190667,2.555477,0.148569]
data = asarray([data])
print(model.predict(data))
