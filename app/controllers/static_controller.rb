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
		@words_count_meaning = Hash.new
		@word_sort.each do |word, count|
			dict_results = DictionaryLookup::Base.define(word)
			count_meaning = Array.new
			count_meaning << count
			count_meaning << dict_results
			@words_count_meaning[word] = count_meaning
		end

		@value_dict_sort = Hash.new
		@value_sort.each do |word, count| 
			dict_results = DictionaryLookup::Base.define(word)
			count_meaning = Array.new
			count_meaning << count
			count_meaning << dict_results
			@value_dict_sort[word] = count_meaning
		end

		@word_dict_sort = Hash.new
		@word_sort.each do |word, count| 
			dict_results = DictionaryLookup::Base.define(word)
			count_meaning = Array.new
			count_meaning << count
			count_meaning << dict_results
			@word_dict_sort[word] = count_meaning
		end

	end

end
