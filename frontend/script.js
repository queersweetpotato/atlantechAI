// Example questions – you can edit this array
const questions = [
  {
    id: '1',
    type: 'text',
    label: 'Number 1:',
  },
/*  {
    id: '2',
    type: 'multiple',
    label: 'How many hours of sleep do you get a night, on average?',
    options: ['less than 4', '4-6', '6-8', 'More than 8']
  },*/
  {
    id: '2',
    type: 'text',
    label: 'Number 2:',
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
  let param = {"p": data["1"]};
  for(let i = 2; i <= questions.length; ++i) {
    param["p"] += "," + data[i.toString()];
  }

  // Creating query parameters
  const queryParams = new URLSearchParams(param).toString();

  // Getting data from backend
  const site = "https://predict-425025011942.us-central1.run.app/";
  /*fetch(site + "?" + queryParams).then(response => {
    if(!response.ok)
	throw new Error("Backend Response Error");
    return response.text();
  }).then(resultText => {
    console.log("Response from backend: ", resultText);
  }).then(error => {
    console.log("Error trying to fetch from backend: ", error);
  });*/
  // TODO Implement fetching from server and displaying results

  console.log(param);

  //console.log('Form submitted with data:', data);
  // You can replace this with your scoring logic, API calls, etc.
}

// Initialize form
generateForm(questions);
