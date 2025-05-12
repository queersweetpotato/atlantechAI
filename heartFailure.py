from xgboost import XGBRFRegressor
from xgboost import XGBRegressor
from numpy import asarray
from numpy import absolute
from sklearn.datasets import fetch_openml 
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import RepeatedKFold
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import train_test_split

#fetch dataset and split it into training and label data
data = fetch_openml(data_id=45949)

#the dataset does not have a defined target column, hence I have decided to use death event
print("data: ", data['data'])
y = data['data']['DEATH_EVENT']
#need to delete final column from the data bit

#X_train, y_test = train_test_split(data['data'], data['target'])
#print(X_train)
#print(X_test)
#print(y_train)
#print(y_test)

#define model
#model = XGBRFRegressor(eval_metric='rmsle')
model = XGBRFRegressor()
#model = XGBRFRegressor(learning_rate= 0.1, max_depth= 3, n_estimators= 30, tree_method="approx")

#train the model
#model.fit(X, y)

#predict
#preds = bst.predict(X_test)
#print(preds)

