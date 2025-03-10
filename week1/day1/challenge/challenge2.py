def remove_consecutive_duplicates(input_string):
    result = ""
    
    for i in range(len(input_string)):
        if i == 0 or input_string[i] != input_string[i - 1]:
            result += input_string[i]
    
    return result

user_input = input("Enter a string: ")

output = remove_consecutive_duplicates(user_input)

print("String with consecutive duplicates removed:", output)
