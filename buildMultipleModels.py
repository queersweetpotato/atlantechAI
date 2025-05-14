#!/usr/bin/env python
# coding: utf-8

# In[2]:


#imports for model validation
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import RepeatedKFold
from sklearn.model_selection import GridSearchCV
from numpy import absolute

#imports for loading and splitting data
from sklearn.model_selection import train_test_split
from sklearn.datasets import fetch_openml
from pandas import read_csv

#imports for making models
from xgboost import XGBRFRegressor
from xgboost import XGBRegressor
from sklearn.metrics import * #I still don't fully understand how the metrics work

#import for converting data for testing
from numpy import asarray

#for NaN stuff
import math


#read in data (for predicting Heart Event), separate into training (X) and target (y) data
df = read_csv("datasets/trimmedDataNoHeader.csv", header=None)
data = df.values
X, y = data[:, 0:-1], data[:, -1]
#X_train, X_test, y_train, y_test = train_test_split(X, y)
#print(X_train)
#print(y_train)

#removes NaN from y_train
count = 0
for i in y:
  if math.isnan(i):
    y[count] = 0
  count += 1

#fetch dataset (death in case of Heart Event) and split it into training and label data
data2 = fetch_openml(data_id=45949)
#the dataset does not have a defined target column, hence I have decided to use death event
y2 = data2['data']['DEATH_EVENT']
#need to delete final column from the data bit
del data2['data']['DEATH_EVENT']
X2 = data2['data']
#X_train2, X_test2, y_train2, y_test2 = train_test_split(X2, y2)

#define models
#model = XGBRFRegressor(eval_metric='rmsle')
#model = XGBRFRegressor()
deathModel = XGBRFRegressor(eval_metric='rmsle', learning_rate= 0.7, max_depth= 12, n_estimators= 50)
heartModel = XGBRFRegressor(eval_metric='rmsle', learning_rate=0.9, max_depth = 10, n_estimators = 300)


"""
#find the best hyper parameters

#set up our search grid
param_grid = {"max_depth":    [6, 10, 12],
              "n_estimators": [200, 300, 400],
              "learning_rate": [0.5, 0.7, 0.9]}

# try out every combination of the above values
search = GridSearchCV(heartModel, param_grid, refit=True, cv=5).fit(X_train, y_train)
#search2 = GridSearchCV(deathModel, param_grid, refit=True, cv=5).fit(X_train2, y_train2)

#print("The best hyperparameters for death are ",search2.best_params_)
print("The best hyperparameters for Heart Event are ",search.best_params_)

#evaluate the model

#define model evaluation method
cv = RepeatedKFold(n_splits=10, n_repeats=3, random_state=1)
#evaluate model
scores = cross_val_score(heartModel, X_train, y_train, scoring='neg_mean_absolute_error', cv=cv, n_jobs=-1)
#scores2 = cross_val_score(deathModel, X_train2, y_train2, scoring='neg_mean_absolute_error', cv=cv, n_jobs=-1)

#force scores to be positive
scores = absolute(scores)
print('Mean MAE (heart): %.3f (%.3f)' % (scores.mean(), scores.std()) )
#scores = absolute(scores2)
#print('Mean MAE (death): %.3f (%.3f)' % (scores2.mean(), scores2.std()) )

"""
#train the models
heartModel.fit(X, y)
deathModel.fit(X2, y2)

#predict
#preds = deathModel.predict(X_test2)
#print(preds)
#print(y_test2)

#preds = heartModel.predict(X_test)
#for i in range(len(preds)):
#  if y_test[i]==1:
#    print(preds[i])
#print(preds)
#print(y_test)

#save the models
heartModel.save_model("heartEvent.ubj")
deathModel.save_model("death.ubj")


