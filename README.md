# ContextSensitiveApp
Context-sensitive application using ML is developed in scope of the lecture Context Sensitive Systems.

This app consists of three parts:
1. Record App: App for collecting data from the smartphone and upload to edge-ml cloud using accelerometer for three classes:
   1. Reading: just looking on the smartphone
   2. Chatting: the same orientation but typing with keyboard
   3. Calling: Keeping smartphone near the ear and speaking
2. Python data analysis with typical ML Pipeline:
   1. Data Cleaning and Feature Extraction
   2. Model Selection and Feature Selection
   3. Optimization of hyperparameters
   4. Deployment
3. sayMyActionApp: 
   1. App for prediction of action using the model from step 2
   2. To test, go to https://codesandbox.io/s/saymyactionapp-6dx84s?file=/index.html

NB: Tested only on iOS devices