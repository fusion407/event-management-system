class EventsController < ApplicationController
    wrap_parameters format: []

    def index
        events = Event.all
        render json: events
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    private

    def event_params
        params.permit(:title, :description, :location, :start_date, :end_date, :created_by)
    end
end
