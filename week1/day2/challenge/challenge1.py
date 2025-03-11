def create_letter_index_dict(word):
    """Creates a dictionary storing the indexes of each letter in a list."""
    letter_dict = {}

    for index, letter in enumerate(word):
        if letter in letter_dict:
            letter_dict[letter].append(index)
        else:
            letter_dict[letter] = [index]

    return letter_dict

word = input("Enter a word: ")

letter_index_dict = create_letter_index_dict(word)

print("Letter Index Dictionary:", letter_index_dict)
