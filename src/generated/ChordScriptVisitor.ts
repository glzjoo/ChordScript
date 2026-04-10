


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ChordScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ChordScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ChordScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl_list?: (ctx: Decl_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.class_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_decl?: (ctx: Class_declContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.class_member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_member?: (ctx: Class_memberContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.var_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_decl?: (ctx: Var_declContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.func_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_decl?: (ctx: Func_declContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.param_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_list?: (ctx: Param_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.stmt_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt_list?: (ctx: Stmt_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.loop_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop_stmt?: (ctx: Loop_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.expr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.method_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call?: (ctx: Method_callContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiation?: (ctx: InstantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.arg_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg_list?: (ctx: Arg_listContext) => Result;

	/**
	 * Visit a parse tree produced by `ChordScriptParser.track_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrack_literal?: (ctx: Track_literalContext) => Result;
}

