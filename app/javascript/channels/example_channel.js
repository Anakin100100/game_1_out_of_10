import consumer from "./consumer"
import CableReady from 'cable_ready'
import { red } from "@tailwindcss/typography/src/styles";


consumer.subscriptions.create("ExampleChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var body = document.getElementById("viewing_page_body");
    if (body) {
      console.log("on vieving page")
      var new_data = JSON.parse(data.operations[0].detail);
      console.log(new_data)
      update_score("score_3a", new_data);
      update_score("score_3b", new_data);
      update_score("score_3c", new_data);
      update_score("score_3d", new_data);
      update_number_of_questions_left(new_data);
      update_chances("3a", new_data["chances_3a"]);
      update_chances("3b", new_data["chances_3b"]);
      update_chances("3c", new_data["chances_3c"]);
      update_chances("3d", new_data["chances_3d"]);
    } else {
      console.log("on control page")
    }
  }
});

function update_score(id, new_data) {
  const element = document.getElementById(id);
  element.innerHTML = new_data[id];
}

function update_chances(id, chances_left) {
  const dot_1_name = `dot_1_${id}`;
  const dot_2_name = `dot_2_${id}`;
  const dot_3_name = `dot_3_${id}`;
  const dot_1 = document.getElementById(dot_1_name);
  console.log(chances_left)
  const dot_2 = document.getElementById(dot_2_name);
  const dot_3 = document.getElementById(dot_3_name);
  if (chances_left == 3) {
    dot_1.classList.add("green_dot");
    dot_1.classList.remove("red_dot");
    dot_2.classList.add("green_dot");
    dot_2.classList.remove("red_dot");
    dot_3.classList.add("green_dot");
    dot_3.classList.remove("red_dot");
  }
  if (chances_left == 2) {
    dot_1.classList.add("green_dot");
    dot_1.classList.remove("red_dot");
    dot_2.classList.add("green_dot");
    dot_2.classList.remove("red_dot");
    dot_3.classList.add("red_dot");
    dot_3.classList.remove("green_dot");
  }
  if (chances_left == 1) {
    dot_1.classList.add("green_dot");
    dot_1.classList.remove("red_dot");
    dot_2.classList.add("red_dot");
    dot_2.classList.remove("green_dot");
    dot_3.classList.add("red_dot");
    dot_3.classList.remove("green_dot");
  }
  if (chances_left == 0) {
    dot_1.classList.add("red_dot");
    dot_1.classList.remove("green_dot");
    dot_2.classList.add("red_dot");
    dot_2.classList.remove("green_dot");
    dot_3.classList.add("red_dot");
    dot_3.classList.remove("green_dot");
  }
}

function update_number_of_questions_left(new_data) {
  const number_of_questions_left = document.getElementById('number_of_questions_left');
  number_of_questions_left.innerHTML = new_data["number_of_questions_left"];
}
