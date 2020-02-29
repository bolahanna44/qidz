class Api::MoviesController < Api::ApplicationController
  def index
    pagy, movies = pagy(Movie.where('actor like ?', "%#{params[:query]}%").order(created_at: :desc))
    pagy = pagy_metadata(pagy)
    render json: { movies: movies, metadata: pagy }
  end
end
