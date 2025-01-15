require 'fileutils'

# Define the source file
source_file = "1.js"

# Check if the source file exists
unless File.exist?(source_file)
  puts "Error: #{source_file} not found in the current directory."
  exit
end

# Loop to create 100 copies
(2..101).each do |i|
  target_file = "#{i}.js"
  FileUtils.cp(source_file, target_file)
  puts "Created #{target_file}"
end

puts "100 copies created successfully."
