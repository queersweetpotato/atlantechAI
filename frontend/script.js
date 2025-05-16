// Example questions – you can edit this array
const questions = [
  {
    id: 'age',
    type: 'text',
    label: 'How many years old are you?',
  },
  {
    id: 'anemia',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been anemic?',
    options: ['Yes', 'No'], //maps to 1,0
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  { 
    id: 'creatine',
    type: 'text',
    label: 'What are the patients creatine levels? (Average value is 0.7-1.1)',
  },
  {
    id: 'diabetes',
    type: 'multiple',
    label: 'Do you have or have you previously had diabtetes?',
    options: ['No', 'Pre-diabetes', 'Yes, but only during pregnancy', 'Yes'], //when processed, maps to no=0, pre-diabetes=0.5, pregnancy=1.5, yes=1
    maps: {'No': 0.0, 'Pre-diabetes': 0.5, 'Yes, but only during pregnancy': 1.5, 'Yes': 1.0}
  },
  { 
    id: 'ejectionFraction',
    type: 'text',
    label: 'What is your ejection fraction (percentage of blood leaving the heart at each contraction)? (Average value is 55-70)',
  },
  {
    id: 'highBloodPressure',
    type: 'multiple',
    label: 'Do you have high blood pressure?',
    options: ['Yes', 'No'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  { 
    id: 'platelets',
    type: 'text',
    label: 'What are your platelet levels? (kiloplatelets/mL) (Average value is 150-450)',
  },
  {
    id: 'serumCreatine',
    type: 'text',
    label: 'What are your serum creatine levels? (mg/dL) (Average value is 0.7-1.1)',
  },
  {
    id: 'serumSodium',
    type: 'text',
    label: 'What are your serum Sodium levels? (mEq/dL) (Average value is 13.5-14.5)',
  },
  {
    id: 'sex',
    type: 'multiple',
    label: 'What is your sex?',
    options: ['Female','Male'], //maps to 0, 1
    maps: {'Male': 1.0, 'Female': 0.0}
  },
  {
    id: 'smoker',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been a smoker?',
    options: ['Yes, every day', 'Yes, sometimes', 'No, never', 'No, former smoker'], //maps to every day = 1.5, sometimes = 1, never = 0, former = 0.5
    maps: {'Yes, every day': 1.5, 'Yes, sometimes': 1.0, 'No, never': 0.0, 'No, former smoker': 0.5}
  },
  {
    id: 'deafOrHardOfHearing',
    type: 'multiple',
    label: 'Are you deaf or hard of hearing?',
    options: ['Yes','No'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'blindOrVisionProblems',
    type: 'multiple',
    label: 'Are you blind or visually impared?',
    options: ['Yes','No'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'Esmoker',
    type: 'multiple',
    label: 'Do you currently or have you in the past year smoked e-cigarettes?',
    options: ['Yes, every day', 'Yes, sometimes', 'No, never', 'No, former smoker'], //maps to every day = 1, sometimes = 0.75, never = 0, former = 0.5
    maps: {'Yes, every day': 1.0, 'Yes, sometimes': 0.75, 'No, never': 0.0, 'No, former smoker': 0.5}
  },
  { 
    id: 'chestScan',
    type: 'multiple',
    label: 'Have you had a chest scan in the past year?',
    options: ['Yes', 'No'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'raceEthnicity',
    type: 'multiple',
    label: 'What is your race/ethnicity?',
    options: ['White', 'Hispanic', 'Black', 'Multiracial', 'Other'], //maps to white = 0, hispanic = 1, black = 2, multi = 3, other = 4
    maps: {'White': 0, 'Hispanic': 1, 'Black': 2, 'Multiracial': 3, 'Other': 4}
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
    label: 'What is your BMI? (Calculators for this can be found online)'
  },
  {
    id: 'alcohol',
    type: 'multiple',
    label: 'Do you drink?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'anxiety',
    type: 'multiple',
    label: 'Do you currently or have you in the past year used medication to treat anxiety?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'hormonalContraceptives',
    type: 'multiple',
    label: 'Do you currently or have you in the past year taken hormonal contraceptives?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'edema',
    type: 'multiple',
    label: 'Have you in the past year had an edema?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'hypothyroidism',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had hypothyroidism?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'ibs',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had IBS (irritable bowel disease)?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'obesity',
    type: 'multiple',
    label: 'Are you currently or have you in the past year been obese?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'opioids',
    type: 'multiple',
    label: 'Do you currently or have you in the past year used opioids?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'sepsis',
    type: 'multiple',
    label: 'Have you in the past year had sepsis?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'sleep apnea',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had sleep apnea?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'last checkupTime',
    type: 'multiple',
    label: 'When was your last checkup?',
    options: ['Less than a year ago', 'Less than 2 years ago', 'less than 5 years ago', 'more than 5 years ago'], //maps to less than a year = 1, less than 2 = 2, less than 5 = 5, more than 5 = 6
    maps: {'Less than a year ago': 1.0, 'Less than 2 years ago': 2.0, 'less than 5 years ago': 5.0, 'more than 5 years ago': 6.0}
  },
  { 
    id: 'physicalActive',
    type: 'multiple',
    label: 'Are you physically active? (average 150min moderate activity per week)',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'sleepTime',
    type: 'text',
    label: 'How many hours of sleep do you get a night, on average?',
  },
  {
    id: 'angina',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had angina (often described as squeezing, pressure, heaviness, tightness or pain in the chest)?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'asthma',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had asthma?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'copd',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had COPD (Chronic obstructive pulmonary disease)?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'depression',
    type: 'multiple',
    label: 'Do you currently or have you in the past year used medication to treat major depressive disorder?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
  },
  {
    id: 'kidneyDisease',
    type: 'multiple',
    label: 'Do you currently or have you in the past year had kidney disease?',
    options: ['No', 'Yes'],
    maps: {'Yes': 1.0, 'No': 0.0}
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

function handleSubmit(data) {
  // Getting parameters by number and appending them to array
  let param = {"p": ""};
  for(let i = 0; i < questions.length; ++i) {
    param["p"] += (data[questions[i].id] ? data[questions[i].id] : "None");
    if(i < (questions.length - 1))
	param["p"] += ",";
  }

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
    let numbers = resultText.match(/[0-9]\.[0-9]+/g);
    displayResult(numbers[0], numbers[1]);
  }).catch(error => {
    console.log("Error trying to fetch from backend: ", error);
  });
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function displayResult(p1, p2) {
  let resultEl = document.getElementById('result');
  // Creating result element if it doesn't exist
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
  // Adding the text to the result element
  let text = "Probability of heart condition: " + Math.round(p1*10000) / 100.0 + "%<br>";
  text += "Probability of death if heart condition present: " + Math.round(p2*10000) / 100.0 + "%";
  resultEl.innerHTML = text;
}

// Initialize form
generateForm(questions);
