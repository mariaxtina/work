puts [1....100]
for n %= 3
	print "Fizz"
end
for n %= 5
	print "Buzz"
end
for (n %= 3 && n %= 5)
	print "FizzBuzz"
end

