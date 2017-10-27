@quotes.each do |quote|
  json.set! quote.id do
    json.partial! 'api/quotes/quote', quote: quote
  end
end
