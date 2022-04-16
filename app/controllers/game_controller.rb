class GameController < ApplicationController
    include CableReady::Broadcaster

    def index 
        @game = Game.first
    end

    def control_panel
        @game = Game.first
    end

    def update_game_state 
        @game = Game.first
        @game.score_3a = params["score_3a"]
        @game.score_3b = params["score_3b"]
        @game.score_3c = params["score_3c"]
        @game.score_3d = params["score_3d"]
        @game.chances_3a = params["chances_3a"]
        @game.chances_3b = params["chances_3b"]
        @game.chances_3c = params["chances_3c"]
        @game.chances_3d = params["chances_3d"]
        @game.number_of_questions_left = params["number_of_questions_left"]
        
        @game.save


        cable_ready["game_channel"].dispatch_event(
            name: "game_state_updated",
            detail: @game.to_json
        )
        cable_ready.broadcast 

        redirect_to "/control_panel"
    end
end
