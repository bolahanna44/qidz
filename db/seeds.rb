require 'csv'

# parsing movies
movies = CSV.read('db/movies.csv')
movies[1..-1].each do |row|
  Movie.create(
    name: row[0],
    description: row[1],
    year: row[2],
    director: row[3],
    actor: row[4],
    filming_location: row[5],
    country: row[6]
  )
end

# parsing reviews
reviews = CSV.read('db/reviews.csv')
reviews[1..-1].each do |row|
  movie = Movie.find_by(name: row[0])
  Review.create(
    movie_id: movie.try(:id),
    user: row[1],
    stars: row[2],
    review: row[3]
  )
end