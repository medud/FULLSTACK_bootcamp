def run_quiz():
    """Runs the Star Wars quiz, tracks correct/incorrect answers, and displays results."""
    data = [
        {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
        {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
        {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
        {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
        {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
        {"question": "What species is Chewbacca?", "answer": "Wookiee"}
    ]

    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for entry in data:
        user_answer = input(f"{entry['question']} ").strip()
        if user_answer.lower() == entry["answer"].lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({"question": entry["question"], "your_answer": user_answer, "correct_answer": entry["answer"]})

    print("\nQuiz Results:")
    print(f" Correct Answers: {correct_answers}")
    print(f" Incorrect Answers: {incorrect_answers}")

    if wrong_answers:
        print("\nQuestions You Got Wrong:")
        for item in wrong_answers:
            print(f" {item['question']}")
            print(f" Your Answer: {item['your_answer']}")
            print(f" Correct Answer: {item['correct_answer']}")
    
    if incorrect_answers > 3:
        print("\nYou got more than 3 wrong answers. Try again to improve your score!")
        retry = input("Do you want to play again? (yes/no): ").strip().lower()
        if retry == "yes":
            run_quiz()

run_quiz()
