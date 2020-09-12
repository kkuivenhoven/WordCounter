class StaticController < ApplicationController

	def home
	end

	def submit_page
		@input_text = params["static"]["input_text"]
		@input_text = @input_text.downcase
		@input_text = @input_text.sub("\n", " ")
		@input_text = @input_text.sub("\r", " ")
		@input_text = @input_text.sub(".", " ")
		@split_text = @input_text.split(/[\s,]+/).map(&:to_s)
		@dictionary = Hash.new
		@split_text.each do |word| 
			if @dictionary.key?(word)
				@dictionary[word] += 1
			else	
				@dictionary[word] = 1
			end	
		end
		redirect_to controller: "static", action: "results_page", params: { dictionary: @dictionary }
	end

	def results_page
		@dictionary = params["dictionary"].to_enum.to_h
		@total_words = 0
		@dictionary.each do |word, count|
			@total_words += count.to_i
		end
		@value_sort = @dictionary.sort_by { |word, count| count }
		@value_sort = Hash[@value_sort.to_a.reverse].to_h
		@word_sort = @dictionary.sort_by { |word, count| word }
	end

end
