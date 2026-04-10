import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener"
import { ProgramContext } from "./ChordScriptParser";
import { Decl_listContext } from "./ChordScriptParser";
import { DeclContext } from "./ChordScriptParser";
import { Class_declContext } from "./ChordScriptParser";
import { Class_memberContext } from "./ChordScriptParser";
import { Var_declContext } from "./ChordScriptParser";
import { TypeContext } from "./ChordScriptParser";
import { Func_declContext } from "./ChordScriptParser";
import { Param_listContext } from "./ChordScriptParser";
import { Stmt_listContext } from "./ChordScriptParser";
import { StmtContext } from "./ChordScriptParser";
import { If_stmtContext } from "./ChordScriptParser";
import { Loop_stmtContext } from "./ChordScriptParser";
import { Return_stmtContext } from "./ChordScriptParser";
import { Expr_stmtContext } from "./ChordScriptParser";
import { ExprContext } from "./ChordScriptParser";
import { Method_callContext } from "./ChordScriptParser";
import { InstantiationContext } from "./ChordScriptParser";
import { TermContext } from "./ChordScriptParser";
import { Arg_listContext } from "./ChordScriptParser";
import { Track_literalContext } from "./ChordScriptParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ChordScriptParser`.
 */
export interface ChordScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ChordScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.decl_list`.
	 * @param ctx the parse tree
	 */
	enterDecl_list?: (ctx: Decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.decl_list`.
	 * @param ctx the parse tree
	 */
	exitDecl_list?: (ctx: Decl_listContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.class_decl`.
	 * @param ctx the parse tree
	 */
	enterClass_decl?: (ctx: Class_declContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.class_decl`.
	 * @param ctx the parse tree
	 */
	exitClass_decl?: (ctx: Class_declContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.class_member`.
	 * @param ctx the parse tree
	 */
	enterClass_member?: (ctx: Class_memberContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.class_member`.
	 * @param ctx the parse tree
	 */
	exitClass_member?: (ctx: Class_memberContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.var_decl`.
	 * @param ctx the parse tree
	 */
	enterVar_decl?: (ctx: Var_declContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.var_decl`.
	 * @param ctx the parse tree
	 */
	exitVar_decl?: (ctx: Var_declContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.func_decl`.
	 * @param ctx the parse tree
	 */
	enterFunc_decl?: (ctx: Func_declContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.func_decl`.
	 * @param ctx the parse tree
	 */
	exitFunc_decl?: (ctx: Func_declContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.param_list`.
	 * @param ctx the parse tree
	 */
	enterParam_list?: (ctx: Param_listContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.param_list`.
	 * @param ctx the parse tree
	 */
	exitParam_list?: (ctx: Param_listContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	enterStmt_list?: (ctx: Stmt_listContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.stmt_list`.
	 * @param ctx the parse tree
	 */
	exitStmt_list?: (ctx: Stmt_listContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.loop_stmt`.
	 * @param ctx the parse tree
	 */
	enterLoop_stmt?: (ctx: Loop_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.loop_stmt`.
	 * @param ctx the parse tree
	 */
	exitLoop_stmt?: (ctx: Loop_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	exitExpr_stmt?: (ctx: Expr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.method_call`.
	 * @param ctx the parse tree
	 */
	enterMethod_call?: (ctx: Method_callContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.method_call`.
	 * @param ctx the parse tree
	 */
	exitMethod_call?: (ctx: Method_callContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.instantiation`.
	 * @param ctx the parse tree
	 */
	enterInstantiation?: (ctx: InstantiationContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.instantiation`.
	 * @param ctx the parse tree
	 */
	exitInstantiation?: (ctx: InstantiationContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.arg_list`.
	 * @param ctx the parse tree
	 */
	enterArg_list?: (ctx: Arg_listContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.arg_list`.
	 * @param ctx the parse tree
	 */
	exitArg_list?: (ctx: Arg_listContext) => void;

	/**
	 * Enter a parse tree produced by `ChordScriptParser.track_literal`.
	 * @param ctx the parse tree
	 */
	enterTrack_literal?: (ctx: Track_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ChordScriptParser.track_literal`.
	 * @param ctx the parse tree
	 */
	exitTrack_literal?: (ctx: Track_literalContext) => void;
}

