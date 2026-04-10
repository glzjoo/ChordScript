// Generated from src/grammar/ChordScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ChordScriptListener } from "./ChordScriptListener";
import { ChordScriptVisitor } from "./ChordScriptVisitor";


export class ChordScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly PLUS = 26;
	public static readonly MINUS = 27;
	public static readonly EQ = 28;
	public static readonly NEQ = 29;
	public static readonly DURATION = 30;
	public static readonly NOTE = 31;
	public static readonly NUMBER = 32;
	public static readonly ID = 33;
	public static readonly WS = 34;
	public static readonly COMMENT = 35;
	public static readonly RULE_program = 0;
	public static readonly RULE_decl_list = 1;
	public static readonly RULE_decl = 2;
	public static readonly RULE_class_decl = 3;
	public static readonly RULE_class_member = 4;
	public static readonly RULE_var_decl = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_func_decl = 7;
	public static readonly RULE_param_list = 8;
	public static readonly RULE_stmt_list = 9;
	public static readonly RULE_stmt = 10;
	public static readonly RULE_if_stmt = 11;
	public static readonly RULE_loop_stmt = 12;
	public static readonly RULE_return_stmt = 13;
	public static readonly RULE_expr_stmt = 14;
	public static readonly RULE_expr = 15;
	public static readonly RULE_method_call = 16;
	public static readonly RULE_instantiation = 17;
	public static readonly RULE_term = 18;
	public static readonly RULE_arg_list = 19;
	public static readonly RULE_track_literal = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "decl_list", "decl", "class_decl", "class_member", "var_decl", 
		"type", "func_decl", "param_list", "stmt_list", "stmt", "if_stmt", "loop_stmt", 
		"return_stmt", "expr_stmt", "expr", "method_call", "instantiation", "term", 
		"arg_list", "track_literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'extends'", "'{'", "'}'", "'let'", "':'", "'='", 
		"';'", "'Note'", "'Duration'", "'Number'", "'Track'", "'func'", "'('", 
		"')'", "','", "'if'", "'else'", "'loop'", "'times'", "'return'", "'.'", 
		"'new'", "'['", "']'", "'+'", "'-'", "'=='", "'!='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "PLUS", "MINUS", 
		"EQ", "NEQ", "DURATION", "NOTE", "NUMBER", "ID", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ChordScriptParser._LITERAL_NAMES, ChordScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ChordScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ChordScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return ChordScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ChordScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ChordScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ChordScriptParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.decl_list();
			this.state = 43;
			this.match(ChordScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl_list(): Decl_listContext {
		let _localctx: Decl_listContext = new Decl_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ChordScriptParser.RULE_decl_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 45;
				this.decl();
				}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ChordScriptParser.T__0) | (1 << ChordScriptParser.T__4) | (1 << ChordScriptParser.T__12) | (1 << ChordScriptParser.T__16) | (1 << ChordScriptParser.T__18) | (1 << ChordScriptParser.T__20) | (1 << ChordScriptParser.T__22) | (1 << ChordScriptParser.T__23) | (1 << ChordScriptParser.DURATION) | (1 << ChordScriptParser.NOTE))) !== 0) || _la === ChordScriptParser.NUMBER || _la === ChordScriptParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let _localctx: DeclContext = new DeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ChordScriptParser.RULE_decl);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ChordScriptParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.class_decl();
				}
				break;
			case ChordScriptParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.var_decl();
				}
				break;
			case ChordScriptParser.T__12:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 52;
				this.func_decl();
				}
				break;
			case ChordScriptParser.T__16:
			case ChordScriptParser.T__18:
			case ChordScriptParser.T__20:
			case ChordScriptParser.T__22:
			case ChordScriptParser.T__23:
			case ChordScriptParser.DURATION:
			case ChordScriptParser.NOTE:
			case ChordScriptParser.NUMBER:
			case ChordScriptParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 53;
				this.stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_decl(): Class_declContext {
		let _localctx: Class_declContext = new Class_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ChordScriptParser.RULE_class_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(ChordScriptParser.T__0);
			this.state = 57;
			this.match(ChordScriptParser.ID);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ChordScriptParser.T__1) {
				{
				this.state = 58;
				this.match(ChordScriptParser.T__1);
				this.state = 59;
				this.match(ChordScriptParser.ID);
				}
			}

			this.state = 62;
			this.match(ChordScriptParser.T__2);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ChordScriptParser.T__4 || _la === ChordScriptParser.T__12) {
				{
				{
				this.state = 63;
				this.class_member();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
			this.match(ChordScriptParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_member(): Class_memberContext {
		let _localctx: Class_memberContext = new Class_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ChordScriptParser.RULE_class_member);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ChordScriptParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.var_decl();
				}
				break;
			case ChordScriptParser.T__12:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.func_decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_decl(): Var_declContext {
		let _localctx: Var_declContext = new Var_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ChordScriptParser.RULE_var_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(ChordScriptParser.T__4);
			this.state = 76;
			this.match(ChordScriptParser.ID);
			this.state = 77;
			this.match(ChordScriptParser.T__5);
			this.state = 78;
			this.type();
			this.state = 79;
			this.match(ChordScriptParser.T__6);
			this.state = 80;
			this.expr(0);
			this.state = 81;
			this.match(ChordScriptParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ChordScriptParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			_la = this._input.LA(1);
			if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (ChordScriptParser.T__8 - 9)) | (1 << (ChordScriptParser.T__9 - 9)) | (1 << (ChordScriptParser.T__10 - 9)) | (1 << (ChordScriptParser.T__11 - 9)) | (1 << (ChordScriptParser.ID - 9)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_decl(): Func_declContext {
		let _localctx: Func_declContext = new Func_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ChordScriptParser.RULE_func_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(ChordScriptParser.T__12);
			this.state = 86;
			this.match(ChordScriptParser.ID);
			this.state = 87;
			this.match(ChordScriptParser.T__13);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ChordScriptParser.ID) {
				{
				this.state = 88;
				this.param_list();
				}
			}

			this.state = 91;
			this.match(ChordScriptParser.T__14);
			this.state = 92;
			this.match(ChordScriptParser.T__2);
			this.state = 93;
			this.stmt_list();
			this.state = 94;
			this.match(ChordScriptParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_list(): Param_listContext {
		let _localctx: Param_listContext = new Param_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ChordScriptParser.RULE_param_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(ChordScriptParser.ID);
			this.state = 97;
			this.match(ChordScriptParser.T__5);
			this.state = 98;
			this.type();
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ChordScriptParser.T__15) {
				{
				{
				this.state = 99;
				this.match(ChordScriptParser.T__15);
				this.state = 100;
				this.match(ChordScriptParser.ID);
				this.state = 101;
				this.match(ChordScriptParser.T__5);
				this.state = 102;
				this.type();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt_list(): Stmt_listContext {
		let _localctx: Stmt_listContext = new Stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ChordScriptParser.RULE_stmt_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 108;
				this.stmt();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (ChordScriptParser.T__16 - 17)) | (1 << (ChordScriptParser.T__18 - 17)) | (1 << (ChordScriptParser.T__20 - 17)) | (1 << (ChordScriptParser.T__22 - 17)) | (1 << (ChordScriptParser.T__23 - 17)) | (1 << (ChordScriptParser.DURATION - 17)) | (1 << (ChordScriptParser.NOTE - 17)) | (1 << (ChordScriptParser.NUMBER - 17)) | (1 << (ChordScriptParser.ID - 17)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ChordScriptParser.RULE_stmt);
		try {
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ChordScriptParser.T__16:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.if_stmt();
				}
				break;
			case ChordScriptParser.T__18:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.loop_stmt();
				}
				break;
			case ChordScriptParser.T__22:
			case ChordScriptParser.T__23:
			case ChordScriptParser.DURATION:
			case ChordScriptParser.NOTE:
			case ChordScriptParser.NUMBER:
			case ChordScriptParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.expr_stmt();
				}
				break;
			case ChordScriptParser.T__20:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.return_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ChordScriptParser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(ChordScriptParser.T__16);
			this.state = 120;
			this.match(ChordScriptParser.T__13);
			this.state = 121;
			this.expr(0);
			this.state = 122;
			this.match(ChordScriptParser.T__14);
			this.state = 123;
			this.match(ChordScriptParser.T__2);
			this.state = 124;
			this.stmt_list();
			this.state = 125;
			this.match(ChordScriptParser.T__3);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ChordScriptParser.T__17) {
				{
				this.state = 126;
				this.match(ChordScriptParser.T__17);
				this.state = 127;
				this.match(ChordScriptParser.T__2);
				this.state = 128;
				this.stmt_list();
				this.state = 129;
				this.match(ChordScriptParser.T__3);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loop_stmt(): Loop_stmtContext {
		let _localctx: Loop_stmtContext = new Loop_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ChordScriptParser.RULE_loop_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(ChordScriptParser.T__18);
			this.state = 134;
			this.expr(0);
			this.state = 135;
			this.match(ChordScriptParser.T__19);
			this.state = 136;
			this.match(ChordScriptParser.T__2);
			this.state = 137;
			this.stmt_list();
			this.state = 138;
			this.match(ChordScriptParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ChordScriptParser.RULE_return_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(ChordScriptParser.T__20);
			this.state = 141;
			this.expr(0);
			this.state = 142;
			this.match(ChordScriptParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ChordScriptParser.RULE_expr_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.expr(0);
			this.state = 145;
			this.match(ChordScriptParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, ChordScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.term();
				}
				break;

			case 2:
				{
				this.state = 149;
				this.method_call();
				}
				break;

			case 3:
				{
				this.state = 150;
				this.instantiation();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 158;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ChordScriptParser.RULE_expr);
					this.state = 153;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 154;
					_localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ChordScriptParser.PLUS) | (1 << ChordScriptParser.MINUS) | (1 << ChordScriptParser.EQ) | (1 << ChordScriptParser.NEQ))) !== 0))) {
						_localctx._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 155;
					this.expr(4);
					}
					}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method_call(): Method_callContext {
		let _localctx: Method_callContext = new Method_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ChordScriptParser.RULE_method_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(ChordScriptParser.ID);
			this.state = 162;
			this.match(ChordScriptParser.T__21);
			this.state = 163;
			this.match(ChordScriptParser.ID);
			this.state = 164;
			this.match(ChordScriptParser.T__13);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (ChordScriptParser.T__22 - 23)) | (1 << (ChordScriptParser.T__23 - 23)) | (1 << (ChordScriptParser.DURATION - 23)) | (1 << (ChordScriptParser.NOTE - 23)) | (1 << (ChordScriptParser.NUMBER - 23)) | (1 << (ChordScriptParser.ID - 23)))) !== 0)) {
				{
				this.state = 165;
				this.arg_list();
				}
			}

			this.state = 168;
			this.match(ChordScriptParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiation(): InstantiationContext {
		let _localctx: InstantiationContext = new InstantiationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ChordScriptParser.RULE_instantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(ChordScriptParser.T__22);
			this.state = 171;
			this.match(ChordScriptParser.ID);
			this.state = 172;
			this.match(ChordScriptParser.T__13);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (ChordScriptParser.T__22 - 23)) | (1 << (ChordScriptParser.T__23 - 23)) | (1 << (ChordScriptParser.DURATION - 23)) | (1 << (ChordScriptParser.NOTE - 23)) | (1 << (ChordScriptParser.NUMBER - 23)) | (1 << (ChordScriptParser.ID - 23)))) !== 0)) {
				{
				this.state = 173;
				this.arg_list();
				}
			}

			this.state = 176;
			this.match(ChordScriptParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ChordScriptParser.RULE_term);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ChordScriptParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.match(ChordScriptParser.ID);
				}
				break;
			case ChordScriptParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.match(ChordScriptParser.NUMBER);
				}
				break;
			case ChordScriptParser.NOTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 180;
				this.match(ChordScriptParser.NOTE);
				}
				break;
			case ChordScriptParser.DURATION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 181;
				this.match(ChordScriptParser.DURATION);
				}
				break;
			case ChordScriptParser.T__23:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 182;
				this.track_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg_list(): Arg_listContext {
		let _localctx: Arg_listContext = new Arg_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ChordScriptParser.RULE_arg_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.expr(0);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ChordScriptParser.T__15) {
				{
				{
				this.state = 186;
				this.match(ChordScriptParser.T__15);
				this.state = 187;
				this.expr(0);
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public track_literal(): Track_literalContext {
		let _localctx: Track_literalContext = new Track_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ChordScriptParser.RULE_track_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(ChordScriptParser.T__23);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (ChordScriptParser.T__22 - 23)) | (1 << (ChordScriptParser.T__23 - 23)) | (1 << (ChordScriptParser.DURATION - 23)) | (1 << (ChordScriptParser.NOTE - 23)) | (1 << (ChordScriptParser.NUMBER - 23)) | (1 << (ChordScriptParser.ID - 23)))) !== 0)) {
				{
				this.state = 194;
				this.arg_list();
				}
			}

			this.state = 197;
			this.match(ChordScriptParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xCA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x06\x031\n\x03\r\x03\x0E\x032\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x049\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05?\n\x05\x03" +
		"\x05\x03\x05\x07\x05C\n\x05\f\x05\x0E\x05F\v\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x05\x06L\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\\\n\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07" +
		"\nj\n\n\f\n\x0E\nm\v\n\x03\v\x06\vp\n\v\r\v\x0E\vq\x03\f\x03\f\x03\f\x03" +
		"\f\x05\fx\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\x86\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\x9A\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x07\x11\x9F\n\x11\f\x11\x0E\x11\xA2\v\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\xA9\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x05\x13\xB1\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\xBA\n\x14\x03\x15\x03\x15\x03\x15\x07\x15\xBF\n\x15" +
		"\f\x15\x0E\x15\xC2\v\x15\x03\x16\x03\x16\x05\x16\xC6\n\x16\x03\x16\x03" +
		"\x16\x03\x16\x02\x02\x03 \x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02\x02\x04\x04\x02\v\x0E##\x03\x02\x1C\x1F" +
		"\x02\xCD\x02,\x03\x02\x02\x02\x040\x03\x02\x02\x02\x068\x03\x02\x02\x02" +
		"\b:\x03\x02\x02\x02\nK\x03\x02\x02\x02\fM\x03\x02\x02\x02\x0EU\x03\x02" +
		"\x02\x02\x10W\x03\x02\x02\x02\x12b\x03\x02\x02\x02\x14o\x03\x02\x02\x02" +
		"\x16w\x03\x02\x02\x02\x18y\x03\x02\x02\x02\x1A\x87\x03\x02\x02\x02\x1C" +
		"\x8E\x03\x02\x02\x02\x1E\x92\x03\x02\x02\x02 \x99\x03\x02\x02\x02\"\xA3" +
		"\x03\x02\x02\x02$\xAC\x03\x02\x02\x02&\xB9\x03\x02\x02\x02(\xBB\x03\x02" +
		"\x02\x02*\xC3\x03\x02\x02\x02,-\x05\x04\x03\x02-.\x07\x02\x02\x03.\x03" +
		"\x03\x02\x02\x02/1\x05\x06\x04\x020/\x03\x02\x02\x0212\x03\x02\x02\x02" +
		"20\x03\x02\x02\x0223\x03\x02\x02\x023\x05\x03\x02\x02\x0249\x05\b\x05" +
		"\x0259\x05\f\x07\x0269\x05\x10\t\x0279\x05\x16\f\x0284\x03\x02\x02\x02" +
		"85\x03\x02\x02\x0286\x03\x02\x02\x0287\x03\x02\x02\x029\x07\x03\x02\x02" +
		"\x02:;\x07\x03\x02\x02;>\x07#\x02\x02<=\x07\x04\x02\x02=?\x07#\x02\x02" +
		"><\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x03\x02\x02\x02@D\x07\x05\x02\x02" +
		"AC\x05\n\x06\x02BA\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02EG\x03\x02\x02\x02FD\x03\x02\x02\x02GH\x07\x06\x02\x02" +
		"H\t\x03\x02\x02\x02IL\x05\f\x07\x02JL\x05\x10\t\x02KI\x03\x02\x02\x02" +
		"KJ\x03\x02\x02\x02L\v\x03\x02\x02\x02MN\x07\x07\x02\x02NO\x07#\x02\x02" +
		"OP\x07\b\x02\x02PQ\x05\x0E\b\x02QR\x07\t\x02\x02RS\x05 \x11\x02ST\x07" +
		"\n\x02\x02T\r\x03\x02\x02\x02UV\t\x02\x02\x02V\x0F\x03\x02\x02\x02WX\x07" +
		"\x0F\x02\x02XY\x07#\x02\x02Y[\x07\x10\x02\x02Z\\\x05\x12\n\x02[Z\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x07\x11\x02\x02^_\x07" +
		"\x05\x02\x02_`\x05\x14\v\x02`a\x07\x06\x02\x02a\x11\x03\x02\x02\x02bc" +
		"\x07#\x02\x02cd\x07\b\x02\x02dk\x05\x0E\b\x02ef\x07\x12\x02\x02fg\x07" +
		"#\x02\x02gh\x07\b\x02\x02hj\x05\x0E\b\x02ie\x03\x02\x02\x02jm\x03\x02" +
		"\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l\x13\x03\x02\x02\x02mk\x03" +
		"\x02\x02\x02np\x05\x16\f\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02qo\x03" +
		"\x02\x02\x02qr\x03\x02\x02\x02r\x15\x03\x02\x02\x02sx\x05\x18\r\x02tx" +
		"\x05\x1A\x0E\x02ux\x05\x1E\x10\x02vx\x05\x1C\x0F\x02ws\x03\x02\x02\x02" +
		"wt\x03\x02\x02\x02wu\x03\x02\x02\x02wv\x03\x02\x02\x02x\x17\x03\x02\x02" +
		"\x02yz\x07\x13\x02\x02z{\x07\x10\x02\x02{|\x05 \x11\x02|}\x07\x11\x02" +
		"\x02}~\x07\x05\x02\x02~\x7F\x05\x14\v\x02\x7F\x85\x07\x06\x02\x02\x80" +
		"\x81\x07\x14\x02\x02\x81\x82\x07\x05\x02\x02\x82\x83\x05\x14\v\x02\x83" +
		"\x84\x07\x06\x02\x02\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x85" +
		"\x86\x03\x02\x02\x02\x86\x19\x03\x02\x02\x02\x87\x88\x07\x15\x02\x02\x88" +
		"\x89\x05 \x11\x02\x89\x8A\x07\x16\x02\x02\x8A\x8B\x07\x05\x02\x02\x8B" +
		"\x8C\x05\x14\v\x02\x8C\x8D\x07\x06\x02\x02\x8D\x1B\x03\x02\x02\x02\x8E" +
		"\x8F\x07\x17\x02\x02\x8F\x90\x05 \x11\x02\x90\x91\x07\n\x02\x02\x91\x1D" +
		"\x03\x02\x02\x02\x92\x93\x05 \x11\x02\x93\x94\x07\n\x02\x02\x94\x1F\x03" +
		"\x02\x02\x02\x95\x96\b\x11\x01\x02\x96\x9A\x05&\x14\x02\x97\x9A\x05\"" +
		"\x12\x02\x98\x9A\x05$\x13\x02\x99\x95\x03\x02\x02\x02\x99\x97\x03\x02" +
		"\x02\x02\x99\x98\x03\x02\x02\x02\x9A\xA0\x03\x02\x02\x02\x9B\x9C\f\x05" +
		"\x02\x02\x9C\x9D\t\x03\x02\x02\x9D\x9F\x05 \x11\x06\x9E\x9B\x03\x02\x02" +
		"\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
		"\x02\xA1!\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4\x07#\x02\x02" +
		"\xA4\xA5\x07\x18\x02\x02\xA5\xA6\x07#\x02\x02\xA6\xA8\x07\x10\x02\x02" +
		"\xA7\xA9\x05(\x15\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02" +
		"\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x07\x11\x02\x02\xAB#\x03\x02\x02\x02" +
		"\xAC\xAD\x07\x19\x02\x02\xAD\xAE\x07#\x02\x02\xAE\xB0\x07\x10\x02\x02" +
		"\xAF\xB1\x05(\x15\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02" +
		"\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x07\x11\x02\x02\xB3%\x03\x02\x02\x02" +
		"\xB4\xBA\x07#\x02\x02\xB5\xBA\x07\"\x02\x02\xB6\xBA\x07!\x02\x02\xB7\xBA" +
		"\x07 \x02\x02\xB8\xBA\x05*\x16\x02\xB9\xB4\x03\x02\x02\x02\xB9\xB5\x03" +
		"\x02\x02\x02\xB9\xB6\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03" +
		"\x02\x02\x02\xBA\'\x03\x02\x02\x02\xBB\xC0\x05 \x11\x02\xBC\xBD\x07\x12" +
		"\x02\x02\xBD\xBF\x05 \x11\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02" +
		"\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1)\x03\x02" +
		"\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC5\x07\x1A\x02\x02\xC4\xC6\x05(" +
		"\x15\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\xC8\x07\x1B\x02\x02\xC8+\x03\x02\x02\x02\x1328>DK[kqw\x85" +
		"\x99\xA0\xA8\xB0\xB9\xC0\xC5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ChordScriptParser.__ATN) {
			ChordScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ChordScriptParser._serializedATN));
		}

		return ChordScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public decl_list(): Decl_listContext {
		return this.getRuleContext(0, Decl_listContext);
	}
	public EOF(): TerminalNode { return this.getToken(ChordScriptParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decl_listContext extends ParserRuleContext {
	public decl(): DeclContext[];
	public decl(i: number): DeclContext;
	public decl(i?: number): DeclContext | DeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclContext);
		} else {
			return this.getRuleContext(i, DeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_decl_list; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterDecl_list) {
			listener.enterDecl_list(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitDecl_list) {
			listener.exitDecl_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitDecl_list) {
			return visitor.visitDecl_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	public class_decl(): Class_declContext | undefined {
		return this.tryGetRuleContext(0, Class_declContext);
	}
	public var_decl(): Var_declContext | undefined {
		return this.tryGetRuleContext(0, Var_declContext);
	}
	public func_decl(): Func_declContext | undefined {
		return this.tryGetRuleContext(0, Func_declContext);
	}
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_decl; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterDecl) {
			listener.enterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitDecl) {
			listener.exitDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitDecl) {
			return visitor.visitDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_declContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ChordScriptParser.ID);
		} else {
			return this.getToken(ChordScriptParser.ID, i);
		}
	}
	public class_member(): Class_memberContext[];
	public class_member(i: number): Class_memberContext;
	public class_member(i?: number): Class_memberContext | Class_memberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Class_memberContext);
		} else {
			return this.getRuleContext(i, Class_memberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_class_decl; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterClass_decl) {
			listener.enterClass_decl(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitClass_decl) {
			listener.exitClass_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitClass_decl) {
			return visitor.visitClass_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_memberContext extends ParserRuleContext {
	public var_decl(): Var_declContext | undefined {
		return this.tryGetRuleContext(0, Var_declContext);
	}
	public func_decl(): Func_declContext | undefined {
		return this.tryGetRuleContext(0, Func_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_class_member; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterClass_member) {
			listener.enterClass_member(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitClass_member) {
			listener.exitClass_member(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitClass_member) {
			return visitor.visitClass_member(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_declContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ChordScriptParser.ID, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_var_decl; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterVar_decl) {
			listener.enterVar_decl(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitVar_decl) {
			listener.exitVar_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitVar_decl) {
			return visitor.visitVar_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ChordScriptParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_type; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_declContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ChordScriptParser.ID, 0); }
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_func_decl; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterFunc_decl) {
			listener.enterFunc_decl(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitFunc_decl) {
			listener.exitFunc_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitFunc_decl) {
			return visitor.visitFunc_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_listContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ChordScriptParser.ID);
		} else {
			return this.getToken(ChordScriptParser.ID, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_param_list; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterParam_list) {
			listener.enterParam_list(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitParam_list) {
			listener.exitParam_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitParam_list) {
			return visitor.visitParam_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stmt_listContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_stmt_list; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterStmt_list) {
			listener.enterStmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitStmt_list) {
			listener.exitStmt_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitStmt_list) {
			return visitor.visitStmt_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public loop_stmt(): Loop_stmtContext | undefined {
		return this.tryGetRuleContext(0, Loop_stmtContext);
	}
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_stmt; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmt_list(): Stmt_listContext[];
	public stmt_list(i: number): Stmt_listContext;
	public stmt_list(i?: number): Stmt_listContext | Stmt_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Stmt_listContext);
		} else {
			return this.getRuleContext(i, Stmt_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_if_stmt; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterIf_stmt) {
			listener.enterIf_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitIf_stmt) {
			listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Loop_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_loop_stmt; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterLoop_stmt) {
			listener.enterLoop_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitLoop_stmt) {
			listener.exitLoop_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitLoop_stmt) {
			return visitor.visitLoop_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_return_stmt; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterReturn_stmt) {
			listener.enterReturn_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitReturn_stmt) {
			listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_expr_stmt; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterExpr_stmt) {
			listener.enterExpr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitExpr_stmt) {
			listener.exitExpr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitExpr_stmt) {
			return visitor.visitExpr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _op!: Token;
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.MINUS, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.NEQ, 0); }
	public method_call(): Method_callContext | undefined {
		return this.tryGetRuleContext(0, Method_callContext);
	}
	public instantiation(): InstantiationContext | undefined {
		return this.tryGetRuleContext(0, InstantiationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_expr; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_callContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ChordScriptParser.ID);
		} else {
			return this.getToken(ChordScriptParser.ID, i);
		}
	}
	public arg_list(): Arg_listContext | undefined {
		return this.tryGetRuleContext(0, Arg_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_method_call; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterMethod_call) {
			listener.enterMethod_call(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitMethod_call) {
			listener.exitMethod_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitMethod_call) {
			return visitor.visitMethod_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(ChordScriptParser.ID, 0); }
	public arg_list(): Arg_listContext | undefined {
		return this.tryGetRuleContext(0, Arg_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_instantiation; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterInstantiation) {
			listener.enterInstantiation(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitInstantiation) {
			listener.exitInstantiation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitInstantiation) {
			return visitor.visitInstantiation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.ID, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.NUMBER, 0); }
	public NOTE(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.NOTE, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(ChordScriptParser.DURATION, 0); }
	public track_literal(): Track_literalContext | undefined {
		return this.tryGetRuleContext(0, Track_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_term; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arg_listContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_arg_list; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterArg_list) {
			listener.enterArg_list(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitArg_list) {
			listener.exitArg_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitArg_list) {
			return visitor.visitArg_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Track_literalContext extends ParserRuleContext {
	public arg_list(): Arg_listContext | undefined {
		return this.tryGetRuleContext(0, Arg_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ChordScriptParser.RULE_track_literal; }
	// @Override
	public enterRule(listener: ChordScriptListener): void {
		if (listener.enterTrack_literal) {
			listener.enterTrack_literal(this);
		}
	}
	// @Override
	public exitRule(listener: ChordScriptListener): void {
		if (listener.exitTrack_literal) {
			listener.exitTrack_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ChordScriptVisitor<Result>): Result {
		if (visitor.visitTrack_literal) {
			return visitor.visitTrack_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


