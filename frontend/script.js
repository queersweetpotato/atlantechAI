// Example questions – you can edit this array
const questions = [
/*  {
    id: 'age',
    type: 'text',
    label: 'How many years old are you?',
  },
  {
    id: 'anemia',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been anemic?',
    options: ['Yes', 'No']
  },
  { 
    id: 'creatine',
    type: 'text',
    label: 'What are the patients creatine levels?',
  },
  {
    id: 'diabetes',
    type: 'multiple',
    label: 'Do you have or have you previously had diabtetes?',
    options: ['No', 'Pre-diabetes', 'Yes, but only during pregnancy', 'Yes'] //when processed, maps to 0,0.5,1.5,1
  },
  { 
    id: 'ejectionFraction',
    type: 'text',
    label: 'What is your ejection fraction (percentage of blood leaving the heart at each contraction)?', 
  },
  {
    id: 'highBloodPressure',
    type: 'multiple',
    label: 'Do you have highg blood pressure?',
    options: ['Yes', 'No']
  },
  { 
    id: 'platelets',
    type: 'text',
    label: 'What are your platelet levels? (kiloplatelets/mL)',
  },
  {
    id: 'serumCreatine',
    type: 'text',
    label: 'What are your serum creatine levels? (mg/dL)',
  },
  {
    id: 'serumSodium',
    type: 'text',
    label: 'What are your serum Sodium levels? (mEq/dL)',
  },
  {
    id: 'sex',
    type: 'multiple',
    label: 'What is your sex?',
    options: ['Female','Male'] //maps to 0, 1
  },
  {
    id: 'smoker',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been a smoker?',
    options: ['Yes, every day', 'Yes, sometimes', 'No, never', 'No, former smoker'] //maps to 1.5, 1, 0, 0.5
  },
  {
    id: 'deafOrHardOfHearing',
    type: 'multiple',
    label: 'Are you deaf or hard of hearing?',
    options: ['Yes','No']
  },
  {
    id: 'blindOrVisionProblems',
    type: 'multiple',
    label: 'Are you blind or visually impared?',
    options: ['Yes','No']  
  },
  {
    id: 'Esmoker',
    type: 'multiple',
    label: 'Do you currently or have you in the past year smoked e-cigarettes?',
    options: ['Yes, every day', 'Yes, sometimes', 'No, never', 'No, former smoker'] //maps to 1, 0.75, 0, 0.5
  },
  { 
    id: 'chestScan',
    type: 'multiple',
    label: 'Have you had a chest scan in the past year?',
    options: ['Yes', 'No']
  },
  {
    id: 'raceEthnicity',
    type: 'multiple',
    label: 'What is your race/ethnicity?',
    options: ['White', 'Hispanic', 'Black', 'Multiracial', 'Other'] //maps to 0,1,2,3,4
  },
  { 
    id: 'height',
    type: 'text',
    label: 'What is your height in meters?'
  },
  {
    id: 'weight',
    type: 'text',
    label: 'What is your weight in kilograms?',
  },
  {
    id: 'BMI',
    type: 'text',
    label: 'What is your BMI?'
  },
  {
    id: 'alcohol',
    type: 'multiple',
    label: 'Do you drink?',
    options: ['No', 'Yes']
  },
  {
    id: 'anxiety',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had anxiety?',
    options: ['No', 'Yes']
  },
  {
    id: 'hormonalContraceptives',
    type: 'multiple',
    label: 'Do you currently or have you in the past year taken hormonal contraceptives?',
    options: ['No', 'Yes']
  },
  {
    id: 'edema',
    type: 'multiple',
    label: 'Have you in the past year had an edema?',
    options: ['No', 'Yes']
  },
  {
    id: 'hypothyroidism',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had hypothyroidism?',
    options: ['No', 'Yes']
  },
  {
    id: 'ibs',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had IBS (irritable bowel disease)?',
    options: ['No', 'Yes']
  },
  {
    id: 'obesity',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been obese?',
    options: ['No', 'Yes']
  },
  {
    id: 'opioids',
    type: 'multiple',
    label: 'Do you currently or have you in the past year used opioids?',
    options: ['No', 'Yes']
  },
  {
    id: 'sepsis',
    type: 'multiple',
    label: 'Have you in the past year had sepsis?',
    options: ['No', 'Yes']
  },
  {
    id: 'sleep apnea',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had sleep apnea?',
    options: ['No', 'Yes']
  },
  {
    id: 'last checkupTime',
    type: 'multiple',
    labels: 'When was your last checkup?',
    options: ['Less than a year ago', 'Less than 2 years ago', 'less than 5 years ago', 'more than 5 years ago']//maps to 1,2,5,6
  },
  { 
    id: 'physicalActive',
    type: 'multiple',
    label: 'Are you physically active? (average 150min moderate activity per week)',
    options: ['No', 'Yes']
  },
  {
    id: 'sleepTime',
    type: 'multiple',
    label: 'How many hours of sleep do you get a night, on average?',
    options: ['less than 4', '4-6', '6-8', 'More than 8']
  },
  {
    id: 'angina',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had angina (often described as squeezing, pressure, heaviness, tightness or pain in the chest)?',
    options: ['No', 'Yes']
  },
  {
    id: 'asthma',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had asthma?',
    options: ['No', 'Yes']
  },
  {
    id: 'copd',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had COPD (Chronic obstructive pulmonary disease)?',
    options: ['No', 'Yes']
  },
  {
    id: 'depression',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had major depressive disorder?',
    options: ['No', 'Yes']
  },
  {
    id: 'kidneyDisease',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had kidney disease?',
    options: ['No', 'Yes']
  }*/
  {
    id: 'age',
    type: 'text',
    label: 'How many years old are you?',
  },
  {
    id: 'anemia',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been anemic?',
    options: ['Yes', 'No'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'diabetes',
    type: 'multiple',
    label: 'Do you have or have you previously had diabtetes?',
    options: ['No', 'Pre-diabetes', 'Yes, but only during pregnancy', 'Yes'], //when processed, maps to 0,0.5,1.5,1
    maps: {'No': 0.0, 'Pre-diabetes': 0.5, 'Yes, but only during pregnancy': 1.5, 'Yes': 1.0}
  },
  {
    id: 'highBloodPressure',
    type: 'multiple',
    label: 'Do you have high blood pressure?',
    options: ['Yes', 'No'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'sex',
    type: 'multiple',
    label: 'What is your sex?',
    options: ['Female','Male'] //maps to 0, 1
  },
  {
    id: 'smoker',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been a smoker?',
    options: ['Yes, every day', 'Yes, sometimes', 'No, never', 'No, former smoker'] //maps to 1.5, 1, 0, 0.5
  },
  {
    id: 'Esmoker',
    type: 'multiple',
    label: 'Do you currently or have you in the past year smoked e-cigarettes?',
    options: ['Yes, every day', 'Yes, sometimes', 'No, never', 'No, former smoker'] //maps to 1, 0.75, 0, 0.5
  },
  {
    id: 'raceEthnicity',
    type: 'multiple',
    label: 'What is your race/ethnicity?',
    options: ['White', 'Hispanic', 'Black', 'Multiracial', 'Other'] //maps to 0,1,2,3,4
  },
  { 
    id: 'height',
    type: 'text',
    label: 'What is your height in meters?'
  },
  {
    id: 'weight',
    type: 'text',
    label: 'What is your weight in kilograms?',
  },
  {
    id: 'BMI',
    type: 'text',
    label: 'What is your BMI?'
  },
  {
    id: 'alcohol',
    type: 'multiple',
    label: 'Do you drink?',
    options: ['No', 'Yes']
  },
  {
    id: 'anxiety',
    type: 'multiple',
    label: 'Do you currently or have you in the past year taken medication to treat anxiety?',
    options: ['No', 'Yes']
  },
  {
    id: 'hormonalContraceptives',
    type: 'multiple',
    label: 'Do you currently or have you in the past year taken hormonal contraceptives?',
    options: ['No', 'Yes']
  },
  {
    id: 'hypothyroidism',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had hypothyroidism? (underactive thyroid)',
    options: ['No', 'Yes']
  },
  {
    id: 'obesity',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been obese?',
    options: ['No', 'Yes']
  },
  {
    id: 'opioids',
    type: 'multiple',
    label: 'Do you currently or have you in the past year used opioids?',
    options: ['No', 'Yes']
  },
  {
    id: 'sepsis',
    type: 'multiple',
    label: 'Have you in the past year had sepsis?',
    options: ['No', 'Yes']
  },
  {
    id: 'sleep apnea',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had sleep apnea?',
    options: ['No', 'Yes']
  },
  {
    id: 'last checkupTime',
    type: 'multiple',
    labels: 'When was your last checkup?',
    options: ['Less than a year ago', 'Less than 2 years ago', 'less than 5 years ago', 'more than 5 years ago']//maps to 1,2,5,6
  },
  { 
    id: 'physicalActive',
    type: 'multiple',
    label: 'Are you physically active? (average of 150mins of moderate activity per week)',
    options: ['No', 'Yes']
  },
  {
    id: 'sleepTime',
    type: 'multiple',
    label: 'How many hours of sleep do you get a night, on average?',
    options: ['less than 4', '4-6', '6-8', 'More than 8']
  },
  {
    id: 'angina',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had angina (often described as squeezing, pressure, heaviness, tightness or pain in the chest)?',
    options: ['No', 'Yes']
  },
  {
    id: 'asthma',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had asthma?',
    options: ['No', 'Yes']
  },
  {
    id: 'copd',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had COPD (Chronic obstructive pulmonary disease)?',
    options: ['No', 'Yes']
  },
  {
    id: 'depression',
    type: 'multiple',
    label: 'Do you currently or have you in the past yeartaken medication to treat major depressive disorder?',
    options: ['No', 'Yes']
  },
  {
    id: 'kidneyDisease',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had kidney disease?',
    options: ['No', 'Yes']
  }
];

// Dynamically generate form fields
function generateForm(questions) {
  const form = document.getElementById('testForm');
  questions.forEach(q => {
    const wrapper = document.createElement('div');
    wrapper.className = 'question';

    const label = document.createElement('label');
    label.htmlFor = q.id;
    label.innerText = q.label;
    wrapper.appendChild(label);

    if (q.type === 'text') {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = q.id;
      input.id = q.id;
      wrapper.appendChild(input);
    } else if (q.type === 'multiple') {
      const select = document.createElement('select');
      select.name = q.id;
      select.id = q.id;
      q.options.forEach(opt => {
        const option = document.createElement('option');
	if(q.maps && opt in q.maps)
	    option.value = q.maps[opt];
	else
	    option.value = opt;
        option.text = opt;
        select.appendChild(option);
      });
      wrapper.appendChild(select);
    }

    form.appendChild(wrapper);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    questions.forEach(q => {
      data[q.id] = formData.get(q.id);
    });
    handleSubmit(data); // Your function to process results
  });
}

// Your custom logic goes here
function handleSubmit(data) {
  // Getting parameters by number and appending them to array
  console.log(data);
  let param = {"p": ""};
  console.log(questions.length, questions[0]);
  for(let i = 0; i < 41; ++i) {
    if(i >= questions.length) {
      param["p"] += "None";
    } else {
      if(i == 11)
	param["p"] += "None";
      param["p"] += (data[questions[i].id] ? data[questions[i].id] : "None");
    }
    if(i < 40)
	param["p"] += ",";
  }

  console.log(param);
  return;

  // Creating query parameters
  const queryParams = new URLSearchParams(param).toString();

  // Getting data from backend
  const site = "https://predict-425025011942.us-central1.run.app/";
  fetch(site + "?" + queryParams).then(response => {
    if(!response.ok)
	throw new Error("Backend Response Error");
    return response.text();
  }).then(resultText => {
    console.log("Response from backend: ", resultText);
    displayResult(resultText);
  }).catch(error => {
    console.log("Error trying to fetch from backend: ", error);
  });

  console.log(param);
}

function displayResult(text) {
  let resultEl = document.getElementById('result');
  if (!resultEl) {
    resultEl = document.createElement('div');
    resultEl.id = 'result';
    resultEl.style.marginTop = '30px';
    resultEl.style.marginBottom = '30px';
    resultEl.style.padding = '15px';
    resultEl.style.border = '1px solid #ccc';
    resultEl.style.borderRadius = '8px';
    resultEl.style.backgroundColor = '#f9f9f9';
    document.getElementById("title").after(resultEl);
  }
  resultEl.textContent = text;
}

// Initialize form
generateForm(questions);
