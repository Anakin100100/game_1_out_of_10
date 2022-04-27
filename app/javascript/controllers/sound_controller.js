import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        console.log("sound_controller connected")
    }

    wrong_answer_sound() {
        console.log("wrong_answer_sound")
        document.getElementById("wrong_answer_sound").play()
    }

    correct_answer_sound() {
        console.log("correct_answer_sound")
        document.getElementById("correct_answer_sound").play()
    }
}
