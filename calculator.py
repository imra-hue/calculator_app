def calculate(num1, num2, operation):

    if operation == "+":
        return num1 + num2

    elif operation == "-":
        return num1 - num2

    elif operation == "*":
        return num1 * num2

    elif operation == "/":
        if num2 != 0:
            return num1 / num2
        else:
            return "Cannot Divide By Zero"

    else:
        return "Invalid Operation"