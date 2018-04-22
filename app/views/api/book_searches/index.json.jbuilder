@books.each do |book|
    json.set! book.id do
        json.set! :type, 'book'
        json.partial! 'api/books/book', book: book
    end
end