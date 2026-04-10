// --- PARSER RULES ---
program : decl_list EOF ;
decl_list : decl+ ;
decl : class_decl | var_decl | func_decl | stmt ;

class_decl : 'class' ID ('extends' ID)? '{' class_member* '}' ;
class_member : var_decl | func_decl ;

var_decl : 'let' ID ':' type '=' expr ';' ;
type : 'Note' | 'Duration' | 'Number' | 'Track' | ID ;

func_decl : 'func' ID '(' param_list? ')' '{' stmt_list '}' ;
param_list : ID ':' type (',' ID ':' type)* ;

stmt_list : stmt+ ;
stmt : if_stmt | loop_stmt | expr_stmt | return_stmt ;

if_stmt : 'if' '(' expr ')' '{' stmt_list '}' ('else' '{' stmt_list '}')? ;
loop_stmt : 'loop' expr 'times' '{' stmt_list '}' ;
return_stmt : 'return' expr ';' ;

expr_stmt : expr ';' ;
expr : term
     | expr op=(PLUS|MINUS|EQ|NEQ) expr
     | method_call
     | instantiation
     ;

method_call : ID '.' ID '(' arg_list? ')' ;
instantiation : 'new' ID '(' arg_list? ')' ;

term : ID | NUMBER | NOTE | DURATION | track_literal ;
arg_list : expr (',' expr)* ;
track_literal : '[' arg_list? ']' ;

// --- LEXER RULES (TOKENS) ---
PLUS : '+' ;
MINUS : '-' ;
EQ : '==' ;
NEQ : '!=' ;

DURATION : 'Quarter' | 'Half' | 'Whole' | 'Eighth' ;
NOTE : [A-G] ('#' | 'b')? [0-9] ;
NUMBER : [0-9]+ ;
ID : [a-zA-Z_][a-zA-Z0-9_]* ;

WS : [ \t\r\n]+ -> skip ;
COMMENT : '//' ~[\r\n]* -> skip ;