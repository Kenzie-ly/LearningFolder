#def setting_up_board(n):
#	return ["X" * n for _ in range (n)]


setting_up_board = lambda n : ["X" * n for _ in range(n) ]

def printing_board(board):
	for row in board:
		print(" ",join(row))

win = False
rows = 5
my_board = setting_up_board(rows)

printing_board(my_board)

while not win:
	printing_board(board)
	input()