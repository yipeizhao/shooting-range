var client = (function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var client = {};

	var liveScores = {};

	var build$1 = {};

	var AssessmentCentreClient$1 = {};

	var APIClient$1 = {};

	var ClientConfiguration = {};

	Object.defineProperty(ClientConfiguration, "__esModule", { value: true });
	ClientConfiguration.ClientConfiguration = void 0;
	ClientConfiguration.ClientConfiguration = {
	    BaseURL: ""
	};

	Object.defineProperty(APIClient$1, "__esModule", { value: true });
	APIClient$1.APIClient = void 0;
	const ClientConfiguration_1 = ClientConfiguration;
	class APIClient {
	    constructor() {
	        this.BASE_URL = ClientConfiguration_1.ClientConfiguration.BaseURL;
	    }
	    async _getAsync(path) {
	        return new Promise(resolve => {
	            this._makeRequest("GET", this._getFullURL(path), (response) => resolve(this._parseResponse(response)), null);
	        });
	    }
	    async _postAsync(path, json) {
	        return new Promise(resolve => {
	            this._makeRequest("POST", this._getFullURL(path), (response) => resolve(this._parseResponse(response)), json);
	        });
	    }
	    _getFullURL(path) {
	        return `${this.BASE_URL}${path}`;
	    }
	    _parseResponse(response) {
	        return JSON.parse(response);
	    }
	    _makeRequest(verb, url, callback, json) {
	        var xhr = new XMLHttpRequest();
	        xhr.open(verb, url, true);
	        xhr.setRequestHeader("Content-Type", "application/json");
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4 && xhr.status === 200) {
	                callback(xhr.responseText);
	            }
	        };
	        if (json != null) {
	            xhr.send(JSON.stringify(json));
	        }
	        else {
	            xhr.send();
	        }
	    }
	}
	APIClient$1.APIClient = APIClient;

	Object.defineProperty(AssessmentCentreClient$1, "__esModule", { value: true });
	AssessmentCentreClient$1.AssessmentCentreClient = void 0;
	const APIClient_1$7 = APIClient$1;
	class AssessmentCentreClient extends APIClient_1$7.APIClient {
	    async getAsync() {
	        return await this._getAsync("/assessment-centre");
	    }
	}
	AssessmentCentreClient$1.AssessmentCentreClient = AssessmentCentreClient;

	var AssessmentCentreResultsClient$1 = {};

	Object.defineProperty(AssessmentCentreResultsClient$1, "__esModule", { value: true });
	AssessmentCentreResultsClient$1.AssessmentCentreResultsClient = void 0;
	const APIClient_1$6 = APIClient$1;
	class AssessmentCentreResultsClient extends APIClient_1$6.APIClient {
	    async getAsync() {
	        return await this._getAsync("/assessment-centre-results");
	    }
	}
	AssessmentCentreResultsClient$1.AssessmentCentreResultsClient = AssessmentCentreResultsClient;

	var CodeSubmissionClient$1 = {};

	Object.defineProperty(CodeSubmissionClient$1, "__esModule", { value: true });
	CodeSubmissionClient$1.CodeSubmissionClient = void 0;
	const APIClient_1$5 = APIClient$1;
	class CodeSubmissionClient extends APIClient_1$5.APIClient {
	    async postAsync(json) {
	        return await this._postAsync("/code-submission", json);
	    }
	}
	CodeSubmissionClient$1.CodeSubmissionClient = CodeSubmissionClient;

	var CodeVerificationClient$1 = {};

	Object.defineProperty(CodeVerificationClient$1, "__esModule", { value: true });
	CodeVerificationClient$1.CodeVerificationClient = void 0;
	const APIClient_1$4 = APIClient$1;
	class CodeVerificationClient extends APIClient_1$4.APIClient {
	    async postAsync(json) {
	        return await this._postAsync("/code-verification", json);
	    }
	}
	CodeVerificationClient$1.CodeVerificationClient = CodeVerificationClient;

	var ResetAssessmentCentreClient$1 = {};

	Object.defineProperty(ResetAssessmentCentreClient$1, "__esModule", { value: true });
	ResetAssessmentCentreClient$1.ResetAssessmentCentreClient = void 0;
	const APIClient_1$3 = APIClient$1;
	class ResetAssessmentCentreClient extends APIClient_1$3.APIClient {
	    async postAsync(json) {
	        return await this._postAsync("/reset-assessment-centre", json);
	    }
	}
	ResetAssessmentCentreClient$1.ResetAssessmentCentreClient = ResetAssessmentCentreClient;

	var RunAgainstBotsClient$1 = {};

	Object.defineProperty(RunAgainstBotsClient$1, "__esModule", { value: true });
	RunAgainstBotsClient$1.RunAgainstBotsClient = void 0;
	const APIClient_1$2 = APIClient$1;
	class RunAgainstBotsClient extends APIClient_1$2.APIClient {
	    async postAsync(json) {
	        return this._postAsync("/run-against-bots", json);
	    }
	}
	RunAgainstBotsClient$1.RunAgainstBotsClient = RunAgainstBotsClient;

	var TimerClient$1 = {};

	Object.defineProperty(TimerClient$1, "__esModule", { value: true });
	TimerClient$1.TimerClient = void 0;
	const APIClient_1$1 = APIClient$1;
	class TimerClient extends APIClient_1$1.APIClient {
	    async getAsync() {
	        return await this._getAsync("/timer");
	    }
	    async postAsync(json) {
	        return await this._postAsync("/timer", json);
	    }
	}
	TimerClient$1.TimerClient = TimerClient;

	var TournamentSettingsClient$1 = {};

	Object.defineProperty(TournamentSettingsClient$1, "__esModule", { value: true });
	TournamentSettingsClient$1.TournamentSettingsClient = void 0;
	const APIClient_1 = APIClient$1;
	class TournamentSettingsClient extends APIClient_1.APIClient {
	    async postAsync(json) {
	        return await this._postAsync("/tournament-settings", json);
	    }
	}
	TournamentSettingsClient$1.TournamentSettingsClient = TournamentSettingsClient;

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ClientConfiguration = exports.TournamentSettingsClient = exports.TimerClient = exports.RunAgainstBotsClient = exports.ResetAssessmentCentreClient = exports.CodeVerificationClient = exports.CodeSubmissionClient = exports.AssessmentCentreResultsClient = exports.AssessmentCentreClient = void 0;
	const AssessmentCentreClient_1 = AssessmentCentreClient$1;
	Object.defineProperty(exports, "AssessmentCentreClient", { enumerable: true, get: function () { return AssessmentCentreClient_1.AssessmentCentreClient; } });
	const AssessmentCentreResultsClient_1 = AssessmentCentreResultsClient$1;
	Object.defineProperty(exports, "AssessmentCentreResultsClient", { enumerable: true, get: function () { return AssessmentCentreResultsClient_1.AssessmentCentreResultsClient; } });
	const ClientConfiguration_1 = ClientConfiguration;
	Object.defineProperty(exports, "ClientConfiguration", { enumerable: true, get: function () { return ClientConfiguration_1.ClientConfiguration; } });
	const CodeSubmissionClient_1 = CodeSubmissionClient$1;
	Object.defineProperty(exports, "CodeSubmissionClient", { enumerable: true, get: function () { return CodeSubmissionClient_1.CodeSubmissionClient; } });
	const CodeVerificationClient_1 = CodeVerificationClient$1;
	Object.defineProperty(exports, "CodeVerificationClient", { enumerable: true, get: function () { return CodeVerificationClient_1.CodeVerificationClient; } });
	const ResetAssessmentCentreClient_1 = ResetAssessmentCentreClient$1;
	Object.defineProperty(exports, "ResetAssessmentCentreClient", { enumerable: true, get: function () { return ResetAssessmentCentreClient_1.ResetAssessmentCentreClient; } });
	const RunAgainstBotsClient_1 = RunAgainstBotsClient$1;
	Object.defineProperty(exports, "RunAgainstBotsClient", { enumerable: true, get: function () { return RunAgainstBotsClient_1.RunAgainstBotsClient; } });
	const TimerClient_1 = TimerClient$1;
	Object.defineProperty(exports, "TimerClient", { enumerable: true, get: function () { return TimerClient_1.TimerClient; } });
	const TournamentSettingsClient_1 = TournamentSettingsClient$1;
	Object.defineProperty(exports, "TournamentSettingsClient", { enumerable: true, get: function () { return TournamentSettingsClient_1.TournamentSettingsClient; } });

	}(build$1));

	var __awaiter$5 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	Object.defineProperty(liveScores, "__esModule", { value: true });
	liveScores.initialiseLiveScores = void 0;
	const assessmentcentre_api_client_1$5 = build$1;
	function initialiseLiveScores(allowCodeViewing, showSimplifiedResults, groupName) {
	    var codeSubmissionsByTeam = {};
	    var resultsDiv = document.getElementById("results");
	    resultsDiv.style.fontSize = `${resultsDiv.clientWidth / 28}px`;
	    function outputResults(data, targetElement) {
	        document.getElementById("loading").style.display = "none";
	        var headings = null;
	        function populateTableHeadings(singlePlayerData) {
	            if (headings == null) {
	                headings = [];
	                for (var heading in singlePlayerData.Results) {
	                    var headingShouldBeHidden = showSimplifiedResults && !singlePlayerData.Results[heading].ShowInMinimalView;
	                    if (!headingShouldBeHidden) {
	                        headings.push({
	                            id: heading,
	                            heading: singlePlayerData.Results[heading].Heading
	                        });
	                    }
	                }
	                headings = headings.sort((a, b) => {
	                    return singlePlayerData.Results[a.id].Order - singlePlayerData.Results[b.id].Order;
	                });
	            }
	        }
	        function buildCellHtml(heading, player) {
	            if (player.IsGapRow) {
	                return `<td class="results__data">...</td>`;
	            }
	            var focusClass = player.Results[heading.id].Focus ? " results__data--focus" : "";
	            var colorClass = player.Results[heading.id].Color ? ` results__data--${player.Results[heading.id].Color}` : "";
	            return `<td class="results__data${focusClass}${colorClass}">${player.Results[heading.id].Value}</td>`;
	        }
	        // Sort and Calculate player positions
	        let playerData = data.playerData.sort(function (a, b) {
	            return b.Results.score.Value - a.Results.score.Value;
	        }).map((player, index) => {
	            player.Position = index + 1;
	            player.IsGapRow = false;
	            return player;
	        });
	        var totalRowsToShowInMinimalMode = 7;
	        if (groupName != null && showSimplifiedResults && playerData.length > totalRowsToShowInMinimalMode) {
	            //only show top 5 results plus team, if viewing simplified results
	            var topResults = playerData.slice(0, totalRowsToShowInMinimalMode);
	            var group = playerData.find((player) => player.GroupName === groupName);
	            if (group.Position > totalRowsToShowInMinimalMode) {
	                topResults[topResults.length - 1] = group;
	                topResults[topResults.length - 2].IsGapRow = true;
	            }
	            playerData = topResults;
	        }
	        var results = playerData.map(function (player) {
	            populateTableHeadings(player);
	            var XSSFixElement = document.createElement('span');
	            XSSFixElement.textContent = player.GroupName;
	            var teamName = XSSFixElement.innerHTML;
	            var element = document.createElement('tr');
	            var allCode = player.OldSubmissions;
	            allCode.push(player.Code);
	            codeSubmissionsByTeam[teamName] = allCode;
	            element.innerHTML = `
                <td class="results__data">${player.IsGapRow ? "..." : player.Position}</td>
                <td class="results__data results__data--team team codeLink">${player.IsGapRow ? "..." : teamName}</td>
                ${headings.map(heading => buildCellHtml(heading, player)).join('')}`;
	            return element.outerHTML;
	        }).reduce(function (previous, current) {
	            return previous + current;
	        }, "");
	        targetElement.innerHTML = `<table class="results"><tr><th class="results__header">P</th><th class="results__header results__header--primary">Bot</th>
            ${headings.map((heading) => `<th class="results__header">${heading.heading}</th>`).join('')}
        </tr>
        ${results}
    </table>`;
	    }
	    if (allowCodeViewing) {
	        (function initialiseCodePreviews() {
	            var editor = ace.edit("playerCode");
	            editor.setTheme("ace/theme/monokai");
	            editor.session.setMode("ace/mode/javascript");
	            editor.setOptions({
	                enableBasicAutocompletion: true
	            });
	            var codeVersions;
	            var viewedTeamName;
	            document.addEventListener('click', function (e) {
	                if (e.target && e.target.classList.contains('codeLink')) {
	                    e.stopPropagation();
	                    viewedTeamName = e.target.innerHTML;
	                    codeVersions = codeSubmissionsByTeam[viewedTeamName];
	                    editor.setValue(codeVersions[codeVersions.length - 1], 1);
	                    document.getElementById("playerInfo").style.display = "grid";
	                    document.getElementById("teamName").innerHTML = viewedTeamName;
	                    var versionTabs = "";
	                    for (var i = 0; i < codeVersions.length; i++) {
	                        var activeClass = i === codeVersions.length - 1 ? ' visibleCodeVersion' : '';
	                        var version = i === codeVersions.length - 1 ? 'Final Version' : `V${i + 1}`;
	                        versionTabs += `<li class="codeVersionTab${activeClass}" data-version="${i}">${version}</li>`;
	                    }
	                    document.getElementById("codeVersions").innerHTML = versionTabs;
	                }
	            });
	            function hideInfo() {
	                document.getElementById("playerInfo").style.display = "none";
	            }
	            function changeVersion(e) {
	                if (e.target && e.target.classList.contains('codeVersionTab')) {
	                    var sibling = e.target.parentNode.firstChild;
	                    while (sibling) {
	                        if (sibling.classList.contains('visibleCodeVersion')) {
	                            sibling.classList.remove('visibleCodeVersion');
	                        }
	                        sibling = sibling.nextSibling;
	                    }
	                    e.target.classList.add("visibleCodeVersion");
	                    var code = codeVersions[Number(e.target.getAttribute("data-version"))];
	                    editor.setValue(code, 1);
	                }
	            }
	            function runCodeVersion() {
	                var data = {
	                    GroupName: viewedTeamName,
	                    Code: editor.getValue()
	                };
	                (() => __awaiter$5(this, void 0, void 0, function* () {
	                    let response = yield new assessmentcentre_api_client_1$5.RunAgainstBotsClient().postAsync(data);
	                    document.getElementById("botTestResults").style.display = "block";
	                    document.getElementById("playerInfo").style.display = "none";
	                    outputResults(response, document.getElementById("testResultsContainer"));
	                }))();
	            }
	            function hideTestResults() {
	                document.getElementById("botTestResults").style.display = "none";
	                document.getElementById("playerInfo").style.display = "grid";
	            }
	            document.getElementById("hideInfo").addEventListener('click', hideInfo);
	            document.getElementById("hideTestResults").addEventListener('click', hideTestResults);
	            document.getElementById("codeVersions").addEventListener('click', changeVersion);
	            document.getElementById("runCodeVersion").addEventListener('click', runCodeVersion);
	        })();
	    }
	    setInterval(() => __awaiter$5(this, void 0, void 0, function* () {
	        let response = yield new assessmentcentre_api_client_1$5.AssessmentCentreResultsClient().getAsync();
	        if (response.playerData.length > 0) {
	            outputResults(response, document.getElementById("results"));
	        }
	    }), 5000);
	}
	liveScores.initialiseLiveScores = initialiseLiveScores;

	var ideTimer = {};

	var Timer$1 = {};

	Object.defineProperty(Timer$1, "__esModule", { value: true });
	Timer$1.Timer = void 0;
	let Timer = function (onTick) {
	    var timerID;
	    var timeRemaining;
	    var publicAPI = {
	        set: set,
	        get: get
	    };
	    function _padToTwoDigits(value) {
	        return `${value < 10 ? "0" : ""}${value}`;
	    }
	    function _formatMinutesAndSeconds(timeRemaining) {
	        var minutes = Math.floor(timeRemaining / 60);
	        var seconds = timeRemaining % 60;
	        return `${_padToTwoDigits(minutes)}:${_padToTwoDigits(seconds)}`;
	    }
	    function _tick() {
	        timeRemaining--;
	        if (timeRemaining <= 0) {
	            timeRemaining = 0;
	            clearInterval(timerID);
	        }
	        onTick(get());
	    }
	    function get() {
	        return {
	            seconds: timeRemaining,
	            formatted: _formatMinutesAndSeconds(timeRemaining)
	        };
	    }
	    function set(seconds) {
	        clearInterval(timerID);
	        timeRemaining = seconds;
	        timerID = setInterval(_tick, 1000);
	    }
	    return publicAPI;
	};
	Timer$1.Timer = Timer;

	var __awaiter$4 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	Object.defineProperty(ideTimer, "__esModule", { value: true });
	ideTimer.startIDECountdownTimer = void 0;
	const assessmentcentre_api_client_1$4 = build$1;
	const Timer_1$1 = Timer$1;
	function startIDECountdownTimer() {
	    if (document.getElementById("timer") != null) {
	        var timer = (0, Timer_1$1.Timer)((tickData) => {
	            document.getElementById("timer").innerText = tickData.formatted;
	        });
	        setInterval(() => __awaiter$4(this, void 0, void 0, function* () {
	            let response = yield new assessmentcentre_api_client_1$4.TimerClient().getAsync();
	            if (timer.get().seconds == null || Math.abs(Number(response.RemainingSeconds) - timer.get().seconds) >= 2) {
	                timer.set(Number(response.RemainingSeconds));
	            }
	        }), 5000);
	    }
	}
	ideTimer.startIDECountdownTimer = startIDECountdownTimer;

	var settingsMenu = {};

	Object.defineProperty(settingsMenu, "__esModule", { value: true });
	settingsMenu.initialiseSettingsMenuToggle = void 0;
	function initialiseSettingsMenuToggle() {
	    var __menu;
	    function getMenuElement() {
	        if (__menu == null) {
	            __menu = document.getElementById("navBar__settingsMenu");
	        }
	        return __menu;
	    }
	    function isMenuHidden() {
	        return getMenuElement().style.display === "none" || getMenuElement().style.display === "";
	    }
	    function onOutsideMenuClick(e) {
	        if (!isMenuHidden() && !document.getElementById("navBar__settings").contains(e.target) && !getMenuElement().contains(e.target)) {
	            toggle();
	        }
	    }
	    function toggle() {
	        getMenuElement().style.display = isMenuHidden() ? "block" : "none";
	        document.getElementById("navBar__settings").classList.toggle("open");
	    }
	    let settingsElement = document.getElementById("navBar__settings");
	    if (settingsElement != null) {
	        window.addEventListener('click', onOutsideMenuClick);
	        settingsElement.addEventListener("click", toggle);
	    }
	}
	settingsMenu.initialiseSettingsMenuToggle = initialiseSettingsMenuToggle;

	var themeSelector = {};

	Object.defineProperty(themeSelector, "__esModule", { value: true });
	themeSelector.initialiseThemeToggle = void 0;
	function initialiseThemeToggle(editor, darkMode) {
	    function toggle() {
	        if (editor) {
	            darkMode ? editor.setTheme("ace/theme/light") : editor.setTheme("ace/theme/monokai");
	            let console = document.getElementById("console");
	            console.classList.toggle("ace-monokai");
	            console.classList.toggle("ace-light");
	        }
	        document.getElementById("root").classList.toggle("lightmode");
	        document.getElementById("root").classList.toggle("darkmode");
	        darkMode = !darkMode;
	    }
	    document.getElementById("navBar__toggle").addEventListener("click", toggle);
	}
	themeSelector.initialiseThemeToggle = initialiseThemeToggle;

	var settings = {};

	var DOMManipulator$1 = {};

	var ElementHelper = {};

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ElementHelper = void 0;
	exports.ElementHelper = {
	    doesElementExist(id) {
	        return document.getElementById(id) != null;
	    },
	    doAllElementsExits(ids) {
	        return ids.every(exports.ElementHelper.doesElementExist);
	    },
	    getObjectContainingElements(ids) {
	        let elements = {};
	        ids.forEach((id) => {
	            let element = document.getElementById(id);
	            if (element != null) {
	                elements[id] = element;
	            }
	            else {
	                throw new Error(`getObjectContainingElements : Element "${id}" not found.
    getObjectContainingElements is only intended for situations where all the elements passed exist on the page.`);
	            }
	        });
	        return elements;
	    }
	};


	}(ElementHelper));

	Object.defineProperty(DOMManipulator$1, "__esModule", { value: true });
	DOMManipulator$1.DOMManipulator = void 0;
	const ElementHelper_1 = ElementHelper;
	class DOMManipulator {
	    constructor() {
	        this.elementCache = {};
	    }
	    initialise() {
	        let requiredElementIDs = this.getRequiredElementIDs();
	        if (ElementHelper_1.ElementHelper.doAllElementsExits(requiredElementIDs)) {
	            this.elementCache = ElementHelper_1.ElementHelper.getObjectContainingElements(requiredElementIDs);
	            this.start();
	        }
	    }
	    el(id) {
	        return this.elementCache[id];
	    }
	}
	DOMManipulator$1.DOMManipulator = DOMManipulator;

	var __awaiter$3 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	Object.defineProperty(settings, "__esModule", { value: true });
	settings.Settings = void 0;
	const assessmentcentre_api_client_1$3 = build$1;
	const DOMManipulator_1$1 = DOMManipulator$1;
	const Timer_1 = Timer$1;
	class Settings extends DOMManipulator_1$1.DOMManipulator {
	    getRequiredElementIDs() {
	        return [
	            "startTimer",
	            "settingsLink",
	            "hideSettings",
	            "applySettings",
	            "reset",
	            "settingsWindow",
	            "timeRemaining",
	            "password",
	            "interval",
	            "gamesPerMatchup",
	            "minutes"
	        ];
	    }
	    start() {
	        this.el("startTimer").addEventListener('click', this.startTimer.bind(this));
	        this.el("settingsLink").addEventListener('click', this.showPanel.bind(this));
	        this.el("hideSettings").addEventListener('click', this.hidePanel.bind(this));
	        this.el("applySettings").addEventListener('click', this.applySettings.bind(this));
	        this.el("reset").addEventListener("click", this.resetTournament.bind(this));
	    }
	    showPanel() {
	        this.el("settingsWindow").style.display = "block";
	    }
	    hidePanel() {
	        this.el("settingsWindow").style.display = "none";
	    }
	    resetTournament() {
	        return __awaiter$3(this, void 0, void 0, function* () {
	            if (confirm("Are you sure you want to reset the tournament?")) {
	                let response = yield new assessmentcentre_api_client_1$3.ResetAssessmentCentreClient().postAsync({ Password: this.el("password").value });
	                alert(response.Success ? "Tournament reset successfully!" : response.Error);
	            }
	        });
	    }
	    applySettings() {
	        return __awaiter$3(this, void 0, void 0, function* () {
	            var interval = this.el("interval").value;
	            var gamesPerMatchup = this.el("gamesPerMatchup").value;
	            var password = this.el("password").value;
	            let response = yield new assessmentcentre_api_client_1$3.TournamentSettingsClient().postAsync({ Password: password, Settings: { MinutesBetweenMatchups: Number(interval), GamesPerMatchup: Number(gamesPerMatchup) } });
	            alert(response.Success ? "Settings updated successfully!" : response.Error);
	        });
	    }
	    timerOnTick(tickData) {
	        this.el("timeRemaining").innerHTML = `Time Remaining: ${tickData.formatted}`;
	    }
	    startTimer() {
	        return __awaiter$3(this, void 0, void 0, function* () {
	            if (!this.timer) {
	                this.timer = (0, Timer_1.Timer)(this.timerOnTick.bind(this));
	            }
	            var seconds = Number(this.el("minutes").value) * 60;
	            let response = yield new assessmentcentre_api_client_1$3.TimerClient().postAsync({ Seconds: seconds, Password: this.el("password").value });
	            if (response.Success) {
	                this.timer.set(seconds);
	                alert("Timer set successfully!");
	            }
	            else {
	                alert(response.Error);
	            }
	        });
	    }
	}
	settings.Settings = Settings;

	var Instructions$1 = {};

	var marked = {};

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/markedjs/marked
	 */

	(function (exports) {

	Object.defineProperty(exports, '__esModule', { value: true });

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _createForOfIteratorHelperLoose(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (it) return (it = it.call(o)).next.bind(it);

	  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	    if (it) o = it;
	    var i = 0;
	    return function () {
	      if (i >= o.length) return {
	        done: true
	      };
	      return {
	        done: false,
	        value: o[i++]
	      };
	    };
	  }

	  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function getDefaults() {
	  return {
	    baseUrl: null,
	    breaks: false,
	    extensions: null,
	    gfm: true,
	    headerIds: true,
	    headerPrefix: '',
	    highlight: null,
	    langPrefix: 'language-',
	    mangle: true,
	    pedantic: false,
	    renderer: null,
	    sanitize: false,
	    sanitizer: null,
	    silent: false,
	    smartLists: false,
	    smartypants: false,
	    tokenizer: null,
	    walkTokens: null,
	    xhtml: false
	  };
	}
	exports.defaults = getDefaults();
	function changeDefaults(newDefaults) {
	  exports.defaults = newDefaults;
	}

	/**
	 * Helpers
	 */
	var escapeTest = /[&<>"']/;
	var escapeReplace = /[&<>"']/g;
	var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
	var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
	var escapeReplacements = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;'
	};

	var getEscapeReplacement = function getEscapeReplacement(ch) {
	  return escapeReplacements[ch];
	};

	function escape(html, encode) {
	  if (encode) {
	    if (escapeTest.test(html)) {
	      return html.replace(escapeReplace, getEscapeReplacement);
	    }
	  } else {
	    if (escapeTestNoEncode.test(html)) {
	      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
	    }
	  }

	  return html;
	}
	var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
	function unescape(html) {
	  // explicitly match decimal, hex, and named HTML entities
	  return html.replace(unescapeTest, function (_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';

	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
	    }

	    return '';
	  });
	}
	var caret = /(^|[^\[])\^/g;
	function edit(regex, opt) {
	  regex = regex.source || regex;
	  opt = opt || '';
	  var obj = {
	    replace: function replace(name, val) {
	      val = val.source || val;
	      val = val.replace(caret, '$1');
	      regex = regex.replace(name, val);
	      return obj;
	    },
	    getRegex: function getRegex() {
	      return new RegExp(regex, opt);
	    }
	  };
	  return obj;
	}
	var nonWordAndColonTest = /[^\w:]/g;
	var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
	function cleanUrl(sanitize, base, href) {
	  if (sanitize) {
	    var prot;

	    try {
	      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
	    } catch (e) {
	      return null;
	    }

	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
	      return null;
	    }
	  }

	  if (base && !originIndependentUrl.test(href)) {
	    href = resolveUrl(base, href);
	  }

	  try {
	    href = encodeURI(href).replace(/%25/g, '%');
	  } catch (e) {
	    return null;
	  }

	  return href;
	}
	var baseUrls = {};
	var justDomain = /^[^:]+:\/*[^/]*$/;
	var protocol = /^([^:]+:)[\s\S]*$/;
	var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
	function resolveUrl(base, href) {
	  if (!baseUrls[' ' + base]) {
	    // we can ignore everything in base after the last slash of its path component,
	    // but we might need to add _that_
	    // https://tools.ietf.org/html/rfc3986#section-3
	    if (justDomain.test(base)) {
	      baseUrls[' ' + base] = base + '/';
	    } else {
	      baseUrls[' ' + base] = rtrim(base, '/', true);
	    }
	  }

	  base = baseUrls[' ' + base];
	  var relativeBase = base.indexOf(':') === -1;

	  if (href.substring(0, 2) === '//') {
	    if (relativeBase) {
	      return href;
	    }

	    return base.replace(protocol, '$1') + href;
	  } else if (href.charAt(0) === '/') {
	    if (relativeBase) {
	      return href;
	    }

	    return base.replace(domain, '$1') + href;
	  } else {
	    return base + href;
	  }
	}
	var noopTest = {
	  exec: function noopTest() {}
	};
	function merge(obj) {
	  var i = 1,
	      target,
	      key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];

	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}
	function splitCells(tableRow, count) {
	  // ensure that every cell-delimiting pipe has a space
	  // before it to distinguish it from an escaped pipe
	  var row = tableRow.replace(/\|/g, function (match, offset, str) {
	    var escaped = false,
	        curr = offset;

	    while (--curr >= 0 && str[curr] === '\\') {
	      escaped = !escaped;
	    }

	    if (escaped) {
	      // odd number of slashes means | is escaped
	      // so we leave it alone
	      return '|';
	    } else {
	      // add space before unescaped |
	      return ' |';
	    }
	  }),
	      cells = row.split(/ \|/);
	  var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe

	  if (!cells[0].trim()) {
	    cells.shift();
	  }

	  if (!cells[cells.length - 1].trim()) {
	    cells.pop();
	  }

	  if (cells.length > count) {
	    cells.splice(count);
	  } else {
	    while (cells.length < count) {
	      cells.push('');
	    }
	  }

	  for (; i < cells.length; i++) {
	    // leading or trailing whitespace is ignored per the gfm spec
	    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
	  }

	  return cells;
	} // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
	// /c*$/ is vulnerable to REDOS.
	// invert: Remove suffix of non-c chars instead. Default falsey.

	function rtrim(str, c, invert) {
	  var l = str.length;

	  if (l === 0) {
	    return '';
	  } // Length of suffix matching the invert condition.


	  var suffLen = 0; // Step left until we fail to match the invert condition.

	  while (suffLen < l) {
	    var currChar = str.charAt(l - suffLen - 1);

	    if (currChar === c && !invert) {
	      suffLen++;
	    } else if (currChar !== c && invert) {
	      suffLen++;
	    } else {
	      break;
	    }
	  }

	  return str.substr(0, l - suffLen);
	}
	function findClosingBracket(str, b) {
	  if (str.indexOf(b[1]) === -1) {
	    return -1;
	  }

	  var l = str.length;
	  var level = 0,
	      i = 0;

	  for (; i < l; i++) {
	    if (str[i] === '\\') {
	      i++;
	    } else if (str[i] === b[0]) {
	      level++;
	    } else if (str[i] === b[1]) {
	      level--;

	      if (level < 0) {
	        return i;
	      }
	    }
	  }

	  return -1;
	}
	function checkSanitizeDeprecation(opt) {
	  if (opt && opt.sanitize && !opt.silent) {
	    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
	  }
	} // copied from https://stackoverflow.com/a/5450113/806777

	function repeatString(pattern, count) {
	  if (count < 1) {
	    return '';
	  }

	  var result = '';

	  while (count > 1) {
	    if (count & 1) {
	      result += pattern;
	    }

	    count >>= 1;
	    pattern += pattern;
	  }

	  return result + pattern;
	}

	function outputLink(cap, link, raw, lexer) {
	  var href = link.href;
	  var title = link.title ? escape(link.title) : null;
	  var text = cap[1].replace(/\\([\[\]])/g, '$1');

	  if (cap[0].charAt(0) !== '!') {
	    lexer.state.inLink = true;
	    var token = {
	      type: 'link',
	      raw: raw,
	      href: href,
	      title: title,
	      text: text,
	      tokens: lexer.inlineTokens(text, [])
	    };
	    lexer.state.inLink = false;
	    return token;
	  } else {
	    return {
	      type: 'image',
	      raw: raw,
	      href: href,
	      title: title,
	      text: escape(text)
	    };
	  }
	}

	function indentCodeCompensation(raw, text) {
	  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

	  if (matchIndentToCode === null) {
	    return text;
	  }

	  var indentToCode = matchIndentToCode[1];
	  return text.split('\n').map(function (node) {
	    var matchIndentInNode = node.match(/^\s+/);

	    if (matchIndentInNode === null) {
	      return node;
	    }

	    var indentInNode = matchIndentInNode[0];

	    if (indentInNode.length >= indentToCode.length) {
	      return node.slice(indentToCode.length);
	    }

	    return node;
	  }).join('\n');
	}
	/**
	 * Tokenizer
	 */


	var Tokenizer = /*#__PURE__*/function () {
	  function Tokenizer(options) {
	    this.options = options || exports.defaults;
	  }

	  var _proto = Tokenizer.prototype;

	  _proto.space = function space(src) {
	    var cap = this.rules.block.newline.exec(src);

	    if (cap) {
	      if (cap[0].length > 1) {
	        return {
	          type: 'space',
	          raw: cap[0]
	        };
	      }

	      return {
	        raw: '\n'
	      };
	    }
	  };

	  _proto.code = function code(src) {
	    var cap = this.rules.block.code.exec(src);

	    if (cap) {
	      var text = cap[0].replace(/^ {1,4}/gm, '');
	      return {
	        type: 'code',
	        raw: cap[0],
	        codeBlockStyle: 'indented',
	        text: !this.options.pedantic ? rtrim(text, '\n') : text
	      };
	    }
	  };

	  _proto.fences = function fences(src) {
	    var cap = this.rules.block.fences.exec(src);

	    if (cap) {
	      var raw = cap[0];
	      var text = indentCodeCompensation(raw, cap[3] || '');
	      return {
	        type: 'code',
	        raw: raw,
	        lang: cap[2] ? cap[2].trim() : cap[2],
	        text: text
	      };
	    }
	  };

	  _proto.heading = function heading(src) {
	    var cap = this.rules.block.heading.exec(src);

	    if (cap) {
	      var text = cap[2].trim(); // remove trailing #s

	      if (/#$/.test(text)) {
	        var trimmed = rtrim(text, '#');

	        if (this.options.pedantic) {
	          text = trimmed.trim();
	        } else if (!trimmed || / $/.test(trimmed)) {
	          // CommonMark requires space before trailing #s
	          text = trimmed.trim();
	        }
	      }

	      var token = {
	        type: 'heading',
	        raw: cap[0],
	        depth: cap[1].length,
	        text: text,
	        tokens: []
	      };
	      this.lexer.inline(token.text, token.tokens);
	      return token;
	    }
	  };

	  _proto.hr = function hr(src) {
	    var cap = this.rules.block.hr.exec(src);

	    if (cap) {
	      return {
	        type: 'hr',
	        raw: cap[0]
	      };
	    }
	  };

	  _proto.blockquote = function blockquote(src) {
	    var cap = this.rules.block.blockquote.exec(src);

	    if (cap) {
	      var text = cap[0].replace(/^ *> ?/gm, '');
	      return {
	        type: 'blockquote',
	        raw: cap[0],
	        tokens: this.lexer.blockTokens(text, []),
	        text: text
	      };
	    }
	  };

	  _proto.list = function list(src) {
	    var cap = this.rules.block.list.exec(src);

	    if (cap) {
	      var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, lines, itemContents;
	      var bull = cap[1].trim();
	      var isordered = bull.length > 1;
	      var list = {
	        type: 'list',
	        raw: '',
	        ordered: isordered,
	        start: isordered ? +bull.slice(0, -1) : '',
	        loose: false,
	        items: []
	      };
	      bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;

	      if (this.options.pedantic) {
	        bull = isordered ? bull : '[*+-]';
	      } // Get next list item


	      var itemRegex = new RegExp("^( {0,3}" + bull + ")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))"); // Get each top-level item

	      while (src) {
	        if (this.rules.block.hr.test(src)) {
	          // End list if we encounter an HR (possibly move into itemRegex?)
	          break;
	        }

	        if (!(cap = itemRegex.exec(src))) {
	          break;
	        }

	        lines = cap[2].split('\n');

	        if (this.options.pedantic) {
	          indent = 2;
	          itemContents = lines[0].trimLeft();
	        } else {
	          indent = cap[2].search(/[^ ]/); // Find first non-space char

	          indent = cap[1].length + (indent > 4 ? 1 : indent); // intented code blocks after 4 spaces; indent is always 1

	          itemContents = lines[0].slice(indent - cap[1].length);
	        }

	        blankLine = false;
	        raw = cap[0];

	        if (!lines[0] && /^ *$/.test(lines[1])) {
	          // items begin with at most one blank line
	          raw = cap[1] + lines.slice(0, 2).join('\n') + '\n';
	          list.loose = true;
	          lines = [];
	        }

	        var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])");

	        for (i = 1; i < lines.length; i++) {
	          line = lines[i];

	          if (this.options.pedantic) {
	            // Re-align to follow commonmark nesting rules
	            line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
	          } // End list item if found start of new bullet


	          if (nextBulletRegex.test(line)) {
	            raw = cap[1] + lines.slice(0, i).join('\n') + '\n';
	            break;
	          } // Until we encounter a blank line, item contents do not need indentation


	          if (!blankLine) {
	            if (!line.trim()) {
	              // Check if current line is empty
	              blankLine = true;
	            } // Dedent if possible


	            if (line.search(/[^ ]/) >= indent) {
	              itemContents += '\n' + line.slice(indent);
	            } else {
	              itemContents += '\n' + line;
	            }

	            continue;
	          } // Dedent this line


	          if (line.search(/[^ ]/) >= indent || !line.trim()) {
	            itemContents += '\n' + line.slice(indent);
	            continue;
	          } else {
	            // Line was not properly indented; end of this item
	            raw = cap[1] + lines.slice(0, i).join('\n') + '\n';
	            break;
	          }
	        }

	        if (!list.loose) {
	          // If the previous item ended with a blank line, the list is loose
	          if (endsWithBlankLine) {
	            list.loose = true;
	          } else if (/\n *\n *$/.test(raw)) {
	            endsWithBlankLine = true;
	          }
	        } // Check for task list items


	        if (this.options.gfm) {
	          istask = /^\[[ xX]\] /.exec(itemContents);

	          if (istask) {
	            ischecked = istask[0] !== '[ ] ';
	            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
	          }
	        }

	        list.items.push({
	          type: 'list_item',
	          raw: raw,
	          task: !!istask,
	          checked: ischecked,
	          loose: false,
	          text: itemContents
	        });
	        list.raw += raw;
	        src = src.slice(raw.length);
	      } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic


	      list.items[list.items.length - 1].raw = raw.trimRight();
	      list.items[list.items.length - 1].text = itemContents.trimRight();
	      list.raw = list.raw.trimRight();
	      var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first

	      for (i = 0; i < l; i++) {
	        this.lexer.state.top = false;
	        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);

	        if (list.items[i].tokens.some(function (t) {
	          return t.type === 'space';
	        })) {
	          list.loose = true;
	          list.items[i].loose = true;
	        }
	      }

	      return list;
	    }
	  };

	  _proto.html = function html(src) {
	    var cap = this.rules.block.html.exec(src);

	    if (cap) {
	      var token = {
	        type: 'html',
	        raw: cap[0],
	        pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      };

	      if (this.options.sanitize) {
	        token.type = 'paragraph';
	        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
	        token.tokens = [];
	        this.lexer.inline(token.text, token.tokens);
	      }

	      return token;
	    }
	  };

	  _proto.def = function def(src) {
	    var cap = this.rules.block.def.exec(src);

	    if (cap) {
	      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
	      var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
	      return {
	        type: 'def',
	        tag: tag,
	        raw: cap[0],
	        href: cap[2],
	        title: cap[3]
	      };
	    }
	  };

	  _proto.table = function table(src) {
	    var cap = this.rules.block.table.exec(src);

	    if (cap) {
	      var item = {
	        type: 'table',
	        header: splitCells(cap[1]).map(function (c) {
	          return {
	            text: c
	          };
	        }),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        rows: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
	      };

	      if (item.header.length === item.align.length) {
	        item.raw = cap[0];
	        var l = item.align.length;
	        var i, j, k, row;

	        for (i = 0; i < l; i++) {
	          if (/^ *-+: *$/.test(item.align[i])) {
	            item.align[i] = 'right';
	          } else if (/^ *:-+: *$/.test(item.align[i])) {
	            item.align[i] = 'center';
	          } else if (/^ *:-+ *$/.test(item.align[i])) {
	            item.align[i] = 'left';
	          } else {
	            item.align[i] = null;
	          }
	        }

	        l = item.rows.length;

	        for (i = 0; i < l; i++) {
	          item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
	            return {
	              text: c
	            };
	          });
	        } // parse child tokens inside headers and cells
	        // header child tokens


	        l = item.header.length;

	        for (j = 0; j < l; j++) {
	          item.header[j].tokens = [];
	          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
	        } // cell child tokens


	        l = item.rows.length;

	        for (j = 0; j < l; j++) {
	          row = item.rows[j];

	          for (k = 0; k < row.length; k++) {
	            row[k].tokens = [];
	            this.lexer.inlineTokens(row[k].text, row[k].tokens);
	          }
	        }

	        return item;
	      }
	    }
	  };

	  _proto.lheading = function lheading(src) {
	    var cap = this.rules.block.lheading.exec(src);

	    if (cap) {
	      var token = {
	        type: 'heading',
	        raw: cap[0],
	        depth: cap[2].charAt(0) === '=' ? 1 : 2,
	        text: cap[1],
	        tokens: []
	      };
	      this.lexer.inline(token.text, token.tokens);
	      return token;
	    }
	  };

	  _proto.paragraph = function paragraph(src) {
	    var cap = this.rules.block.paragraph.exec(src);

	    if (cap) {
	      var token = {
	        type: 'paragraph',
	        raw: cap[0],
	        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
	        tokens: []
	      };
	      this.lexer.inline(token.text, token.tokens);
	      return token;
	    }
	  };

	  _proto.text = function text(src) {
	    var cap = this.rules.block.text.exec(src);

	    if (cap) {
	      var token = {
	        type: 'text',
	        raw: cap[0],
	        text: cap[0],
	        tokens: []
	      };
	      this.lexer.inline(token.text, token.tokens);
	      return token;
	    }
	  };

	  _proto.escape = function escape$1(src) {
	    var cap = this.rules.inline.escape.exec(src);

	    if (cap) {
	      return {
	        type: 'escape',
	        raw: cap[0],
	        text: escape(cap[1])
	      };
	    }
	  };

	  _proto.tag = function tag(src) {
	    var cap = this.rules.inline.tag.exec(src);

	    if (cap) {
	      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
	        this.lexer.state.inLink = true;
	      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
	        this.lexer.state.inLink = false;
	      }

	      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
	        this.lexer.state.inRawBlock = true;
	      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
	        this.lexer.state.inRawBlock = false;
	      }

	      return {
	        type: this.options.sanitize ? 'text' : 'html',
	        raw: cap[0],
	        inLink: this.lexer.state.inLink,
	        inRawBlock: this.lexer.state.inRawBlock,
	        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
	      };
	    }
	  };

	  _proto.link = function link(src) {
	    var cap = this.rules.inline.link.exec(src);

	    if (cap) {
	      var trimmedUrl = cap[2].trim();

	      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
	        // commonmark requires matching angle brackets
	        if (!/>$/.test(trimmedUrl)) {
	          return;
	        } // ending angle bracket cannot be escaped


	        var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');

	        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
	          return;
	        }
	      } else {
	        // find closing parenthesis
	        var lastParenIndex = findClosingBracket(cap[2], '()');

	        if (lastParenIndex > -1) {
	          var start = cap[0].indexOf('!') === 0 ? 5 : 4;
	          var linkLen = start + cap[1].length + lastParenIndex;
	          cap[2] = cap[2].substring(0, lastParenIndex);
	          cap[0] = cap[0].substring(0, linkLen).trim();
	          cap[3] = '';
	        }
	      }

	      var href = cap[2];
	      var title = '';

	      if (this.options.pedantic) {
	        // split pedantic href and title
	        var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

	        if (link) {
	          href = link[1];
	          title = link[3];
	        }
	      } else {
	        title = cap[3] ? cap[3].slice(1, -1) : '';
	      }

	      href = href.trim();

	      if (/^</.test(href)) {
	        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
	          // pedantic allows starting angle bracket without ending angle bracket
	          href = href.slice(1);
	        } else {
	          href = href.slice(1, -1);
	        }
	      }

	      return outputLink(cap, {
	        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
	        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
	      }, cap[0], this.lexer);
	    }
	  };

	  _proto.reflink = function reflink(src, links) {
	    var cap;

	    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
	      var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = links[link.toLowerCase()];

	      if (!link || !link.href) {
	        var text = cap[0].charAt(0);
	        return {
	          type: 'text',
	          raw: text,
	          text: text
	        };
	      }

	      return outputLink(cap, link, cap[0], this.lexer);
	    }
	  };

	  _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
	    if (prevChar === void 0) {
	      prevChar = '';
	    }

	    var match = this.rules.inline.emStrong.lDelim.exec(src);
	    if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well

	    if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
	    var nextChar = match[1] || match[2] || '';

	    if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
	      var lLength = match[0].length - 1;
	      var rDelim,
	          rLength,
	          delimTotal = lLength,
	          midDelimTotal = 0;
	      var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
	      endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)

	      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

	      while ((match = endReg.exec(maskedSrc)) != null) {
	        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
	        if (!rDelim) continue; // skip single * in __abc*abc__

	        rLength = rDelim.length;

	        if (match[3] || match[4]) {
	          // found another Left Delim
	          delimTotal += rLength;
	          continue;
	        } else if (match[5] || match[6]) {
	          // either Left or Right Delim
	          if (lLength % 3 && !((lLength + rLength) % 3)) {
	            midDelimTotal += rLength;
	            continue; // CommonMark Emphasis Rules 9-10
	          }
	        }

	        delimTotal -= rLength;
	        if (delimTotal > 0) continue; // Haven't found enough closing delimiters
	        // Remove extra characters. *a*** -> *a*

	        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***

	        if (Math.min(lLength, rLength) % 2) {
	          var _text = src.slice(1, lLength + match.index + rLength);

	          return {
	            type: 'em',
	            raw: src.slice(0, lLength + match.index + rLength + 1),
	            text: _text,
	            tokens: this.lexer.inlineTokens(_text, [])
	          };
	        } // Create 'strong' if smallest delimiter has even char count. **a***


	        var text = src.slice(2, lLength + match.index + rLength - 1);
	        return {
	          type: 'strong',
	          raw: src.slice(0, lLength + match.index + rLength + 1),
	          text: text,
	          tokens: this.lexer.inlineTokens(text, [])
	        };
	      }
	    }
	  };

	  _proto.codespan = function codespan(src) {
	    var cap = this.rules.inline.code.exec(src);

	    if (cap) {
	      var text = cap[2].replace(/\n/g, ' ');
	      var hasNonSpaceChars = /[^ ]/.test(text);
	      var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);

	      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
	        text = text.substring(1, text.length - 1);
	      }

	      text = escape(text, true);
	      return {
	        type: 'codespan',
	        raw: cap[0],
	        text: text
	      };
	    }
	  };

	  _proto.br = function br(src) {
	    var cap = this.rules.inline.br.exec(src);

	    if (cap) {
	      return {
	        type: 'br',
	        raw: cap[0]
	      };
	    }
	  };

	  _proto.del = function del(src) {
	    var cap = this.rules.inline.del.exec(src);

	    if (cap) {
	      return {
	        type: 'del',
	        raw: cap[0],
	        text: cap[2],
	        tokens: this.lexer.inlineTokens(cap[2], [])
	      };
	    }
	  };

	  _proto.autolink = function autolink(src, mangle) {
	    var cap = this.rules.inline.autolink.exec(src);

	    if (cap) {
	      var text, href;

	      if (cap[2] === '@') {
	        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
	        href = 'mailto:' + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }

	      return {
	        type: 'link',
	        raw: cap[0],
	        text: text,
	        href: href,
	        tokens: [{
	          type: 'text',
	          raw: text,
	          text: text
	        }]
	      };
	    }
	  };

	  _proto.url = function url(src, mangle) {
	    var cap;

	    if (cap = this.rules.inline.url.exec(src)) {
	      var text, href;

	      if (cap[2] === '@') {
	        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
	        href = 'mailto:' + text;
	      } else {
	        // do extended autolink path validation
	        var prevCapZero;

	        do {
	          prevCapZero = cap[0];
	          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
	        } while (prevCapZero !== cap[0]);

	        text = escape(cap[0]);

	        if (cap[1] === 'www.') {
	          href = 'http://' + text;
	        } else {
	          href = text;
	        }
	      }

	      return {
	        type: 'link',
	        raw: cap[0],
	        text: text,
	        href: href,
	        tokens: [{
	          type: 'text',
	          raw: text,
	          text: text
	        }]
	      };
	    }
	  };

	  _proto.inlineText = function inlineText(src, smartypants) {
	    var cap = this.rules.inline.text.exec(src);

	    if (cap) {
	      var text;

	      if (this.lexer.state.inRawBlock) {
	        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
	      } else {
	        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
	      }

	      return {
	        type: 'text',
	        raw: cap[0],
	        text: text
	      };
	    }
	  };

	  return Tokenizer;
	}();

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^(?: *(?:\n|$))+/,
	  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
	  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
	  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
	  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
	  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
	  html: '^ {0,3}(?:' // optional indentation
	  + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
	  + '|comment[^\\n]*(\\n+|$)' // (2)
	  + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
	  + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
	  + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
	  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
	  + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
	  + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
	  + ')',
	  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
	  table: noopTest,
	  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
	  // regex template, placeholders will be replaced according to different paragraph
	  // interruption rules of commonmark and the original markdown spec:
	  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
	  text: /^[^\n]+/
	};
	block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
	block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
	block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
	block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
	block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
	block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
	block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
	block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
	block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
	block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
	.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
	.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
	.getRegex();
	block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);
	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  table: '^ *([^\\n ].*\\|.*)\\n' // Header
	  + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
	  + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

	});
	block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
	.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
	.getRegex();
	block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
	.replace('table', block.gfm.table) // interrupt paragraphs with table
	.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
	.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
	.getRegex();
	/**
	 * Pedantic grammar (original John Gruber's loose markdown specification)
	 */

	block.pedantic = merge({}, block.normal, {
	  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
	  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	  heading: /^(#{1,6})(.*)(?:\n+|$)/,
	  fences: noopTest,
	  // fences not supported
	  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
	});
	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
	  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	  url: noopTest,
	  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
	  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
	  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
	  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
	  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
	  // CDATA section
	  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
	  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
	  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
	  reflinkSearch: 'reflink|nolink(?!\\()',
	  emStrong: {
	    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
	    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
	    //        () Skip orphan delim inside strong    (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
	    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
	    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _

	  },
	  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
	  br: /^( {2,}|\\)\n(?!\s*$)/,
	  del: noopTest,
	  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
	  punctuation: /^([\spunctuation])/
	}; // list of punctuation marks from CommonMark spec
	// without * and _ to handle the different emphasis markers * and _

	inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
	inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

	inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
	inline.escapedEmSt = /\\\*|\\_/g;
	inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
	inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
	inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
	inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
	inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
	inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
	inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
	inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
	inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
	inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
	inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
	inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
	inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
	inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
	inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();
	inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);
	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: {
	    start: /^__|\*\*/,
	    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	    endAst: /\*\*(?!\*)/g,
	    endUnd: /__(?!_)/g
	  },
	  em: {
	    start: /^_|\*/,
	    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
	    endAst: /\*(?!\*)/g,
	    endUnd: /_(?!_)/g
	  },
	  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
	  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
	});
	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
	  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
	  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
	  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
	  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
	  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
	});
	inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: edit(inline.br).replace('{2,}', '*').getRegex(),
	  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
	});

	/**
	 * smartypants text replacement
	 */

	function smartypants(text) {
	  return text // em-dashes
	  .replace(/---/g, "\u2014") // en-dashes
	  .replace(/--/g, "\u2013") // opening singles
	  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
	  .replace(/'/g, "\u2019") // opening doubles
	  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
	  .replace(/"/g, "\u201D") // ellipses
	  .replace(/\.{3}/g, "\u2026");
	}
	/**
	 * mangle email addresses
	 */


	function mangle(text) {
	  var out = '',
	      i,
	      ch;
	  var l = text.length;

	  for (i = 0; i < l; i++) {
	    ch = text.charCodeAt(i);

	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }

	    out += '&#' + ch + ';';
	  }

	  return out;
	}
	/**
	 * Block Lexer
	 */


	var Lexer = /*#__PURE__*/function () {
	  function Lexer(options) {
	    this.tokens = [];
	    this.tokens.links = Object.create(null);
	    this.options = options || exports.defaults;
	    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
	    this.tokenizer = this.options.tokenizer;
	    this.tokenizer.options = this.options;
	    this.tokenizer.lexer = this;
	    this.inlineQueue = [];
	    this.state = {
	      inLink: false,
	      inRawBlock: false,
	      top: true
	    };
	    var rules = {
	      block: block.normal,
	      inline: inline.normal
	    };

	    if (this.options.pedantic) {
	      rules.block = block.pedantic;
	      rules.inline = inline.pedantic;
	    } else if (this.options.gfm) {
	      rules.block = block.gfm;

	      if (this.options.breaks) {
	        rules.inline = inline.breaks;
	      } else {
	        rules.inline = inline.gfm;
	      }
	    }

	    this.tokenizer.rules = rules;
	  }
	  /**
	   * Expose Rules
	   */


	  /**
	   * Static Lex Method
	   */
	  Lexer.lex = function lex(src, options) {
	    var lexer = new Lexer(options);
	    return lexer.lex(src);
	  }
	  /**
	   * Static Lex Inline Method
	   */
	  ;

	  Lexer.lexInline = function lexInline(src, options) {
	    var lexer = new Lexer(options);
	    return lexer.inlineTokens(src);
	  }
	  /**
	   * Preprocessing
	   */
	  ;

	  var _proto = Lexer.prototype;

	  _proto.lex = function lex(src) {
	    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
	    this.blockTokens(src, this.tokens);
	    var next;

	    while (next = this.inlineQueue.shift()) {
	      this.inlineTokens(next.src, next.tokens);
	    }

	    return this.tokens;
	  }
	  /**
	   * Lexing
	   */
	  ;

	  _proto.blockTokens = function blockTokens(src, tokens) {
	    var _this = this;

	    if (tokens === void 0) {
	      tokens = [];
	    }

	    if (this.options.pedantic) {
	      src = src.replace(/^ +$/gm, '');
	    }

	    var token, lastToken, cutSrc, lastParagraphClipped;

	    while (src) {
	      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
	        if (token = extTokenizer.call({
	          lexer: _this
	        }, src, tokens)) {
	          src = src.substring(token.raw.length);
	          tokens.push(token);
	          return true;
	        }

	        return false;
	      })) {
	        continue;
	      } // newline


	      if (token = this.tokenizer.space(src)) {
	        src = src.substring(token.raw.length);

	        if (token.type) {
	          tokens.push(token);
	        }

	        continue;
	      } // code


	      if (token = this.tokenizer.code(src)) {
	        src = src.substring(token.raw.length);
	        lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

	        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
	          lastToken.raw += '\n' + token.raw;
	          lastToken.text += '\n' + token.text;
	          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
	        } else {
	          tokens.push(token);
	        }

	        continue;
	      } // fences


	      if (token = this.tokenizer.fences(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // heading


	      if (token = this.tokenizer.heading(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // hr


	      if (token = this.tokenizer.hr(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // blockquote


	      if (token = this.tokenizer.blockquote(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // list


	      if (token = this.tokenizer.list(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // html


	      if (token = this.tokenizer.html(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // def


	      if (token = this.tokenizer.def(src)) {
	        src = src.substring(token.raw.length);
	        lastToken = tokens[tokens.length - 1];

	        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
	          lastToken.raw += '\n' + token.raw;
	          lastToken.text += '\n' + token.raw;
	          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
	        } else if (!this.tokens.links[token.tag]) {
	          this.tokens.links[token.tag] = {
	            href: token.href,
	            title: token.title
	          };
	        }

	        continue;
	      } // table (gfm)


	      if (token = this.tokenizer.table(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // lheading


	      if (token = this.tokenizer.lheading(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // top-level paragraph
	      // prevent paragraph consuming extensions by clipping 'src' to extension start


	      cutSrc = src;

	      if (this.options.extensions && this.options.extensions.startBlock) {
	        (function () {
	          var startIndex = Infinity;
	          var tempSrc = src.slice(1);
	          var tempStart = void 0;

	          _this.options.extensions.startBlock.forEach(function (getStartIndex) {
	            tempStart = getStartIndex.call({
	              lexer: this
	            }, tempSrc);

	            if (typeof tempStart === 'number' && tempStart >= 0) {
	              startIndex = Math.min(startIndex, tempStart);
	            }
	          });

	          if (startIndex < Infinity && startIndex >= 0) {
	            cutSrc = src.substring(0, startIndex + 1);
	          }
	        })();
	      }

	      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
	        lastToken = tokens[tokens.length - 1];

	        if (lastParagraphClipped && lastToken.type === 'paragraph') {
	          lastToken.raw += '\n' + token.raw;
	          lastToken.text += '\n' + token.text;
	          this.inlineQueue.pop();
	          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
	        } else {
	          tokens.push(token);
	        }

	        lastParagraphClipped = cutSrc.length !== src.length;
	        src = src.substring(token.raw.length);
	        continue;
	      } // text


	      if (token = this.tokenizer.text(src)) {
	        src = src.substring(token.raw.length);
	        lastToken = tokens[tokens.length - 1];

	        if (lastToken && lastToken.type === 'text') {
	          lastToken.raw += '\n' + token.raw;
	          lastToken.text += '\n' + token.text;
	          this.inlineQueue.pop();
	          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
	        } else {
	          tokens.push(token);
	        }

	        continue;
	      }

	      if (src) {
	        var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

	        if (this.options.silent) {
	          console.error(errMsg);
	          break;
	        } else {
	          throw new Error(errMsg);
	        }
	      }
	    }

	    this.state.top = true;
	    return tokens;
	  };

	  _proto.inline = function inline(src, tokens) {
	    this.inlineQueue.push({
	      src: src,
	      tokens: tokens
	    });
	  }
	  /**
	   * Lexing/Compiling
	   */
	  ;

	  _proto.inlineTokens = function inlineTokens(src, tokens) {
	    var _this2 = this;

	    if (tokens === void 0) {
	      tokens = [];
	    }

	    var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong

	    var maskedSrc = src;
	    var match;
	    var keepPrevChar, prevChar; // Mask out reflinks

	    if (this.tokens.links) {
	      var links = Object.keys(this.tokens.links);

	      if (links.length > 0) {
	        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
	          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
	            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
	          }
	        }
	      }
	    } // Mask out other blocks


	    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
	      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
	    } // Mask out escaped em & strong delimiters


	    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
	      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
	    }

	    while (src) {
	      if (!keepPrevChar) {
	        prevChar = '';
	      }

	      keepPrevChar = false; // extensions

	      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
	        if (token = extTokenizer.call({
	          lexer: _this2
	        }, src, tokens)) {
	          src = src.substring(token.raw.length);
	          tokens.push(token);
	          return true;
	        }

	        return false;
	      })) {
	        continue;
	      } // escape


	      if (token = this.tokenizer.escape(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // tag


	      if (token = this.tokenizer.tag(src)) {
	        src = src.substring(token.raw.length);
	        lastToken = tokens[tokens.length - 1];

	        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
	          lastToken.raw += token.raw;
	          lastToken.text += token.text;
	        } else {
	          tokens.push(token);
	        }

	        continue;
	      } // link


	      if (token = this.tokenizer.link(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // reflink, nolink


	      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
	        src = src.substring(token.raw.length);
	        lastToken = tokens[tokens.length - 1];

	        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
	          lastToken.raw += token.raw;
	          lastToken.text += token.text;
	        } else {
	          tokens.push(token);
	        }

	        continue;
	      } // em & strong


	      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // code


	      if (token = this.tokenizer.codespan(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // br


	      if (token = this.tokenizer.br(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // del (gfm)


	      if (token = this.tokenizer.del(src)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // autolink


	      if (token = this.tokenizer.autolink(src, mangle)) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // url (gfm)


	      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
	        src = src.substring(token.raw.length);
	        tokens.push(token);
	        continue;
	      } // text
	      // prevent inlineText consuming extensions by clipping 'src' to extension start


	      cutSrc = src;

	      if (this.options.extensions && this.options.extensions.startInline) {
	        (function () {
	          var startIndex = Infinity;
	          var tempSrc = src.slice(1);
	          var tempStart = void 0;

	          _this2.options.extensions.startInline.forEach(function (getStartIndex) {
	            tempStart = getStartIndex.call({
	              lexer: this
	            }, tempSrc);

	            if (typeof tempStart === 'number' && tempStart >= 0) {
	              startIndex = Math.min(startIndex, tempStart);
	            }
	          });

	          if (startIndex < Infinity && startIndex >= 0) {
	            cutSrc = src.substring(0, startIndex + 1);
	          }
	        })();
	      }

	      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
	        src = src.substring(token.raw.length);

	        if (token.raw.slice(-1) !== '_') {
	          // Track prevChar before string of ____ started
	          prevChar = token.raw.slice(-1);
	        }

	        keepPrevChar = true;
	        lastToken = tokens[tokens.length - 1];

	        if (lastToken && lastToken.type === 'text') {
	          lastToken.raw += token.raw;
	          lastToken.text += token.text;
	        } else {
	          tokens.push(token);
	        }

	        continue;
	      }

	      if (src) {
	        var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

	        if (this.options.silent) {
	          console.error(errMsg);
	          break;
	        } else {
	          throw new Error(errMsg);
	        }
	      }
	    }

	    return tokens;
	  };

	  _createClass(Lexer, null, [{
	    key: "rules",
	    get: function get() {
	      return {
	        block: block,
	        inline: inline
	      };
	    }
	  }]);

	  return Lexer;
	}();

	/**
	 * Renderer
	 */

	var Renderer = /*#__PURE__*/function () {
	  function Renderer(options) {
	    this.options = options || exports.defaults;
	  }

	  var _proto = Renderer.prototype;

	  _proto.code = function code(_code, infostring, escaped) {
	    var lang = (infostring || '').match(/\S*/)[0];

	    if (this.options.highlight) {
	      var out = this.options.highlight(_code, lang);

	      if (out != null && out !== _code) {
	        escaped = true;
	        _code = out;
	      }
	    }

	    _code = _code.replace(/\n$/, '') + '\n';

	    if (!lang) {
	      return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
	    }

	    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
	  };

	  _proto.blockquote = function blockquote(quote) {
	    return '<blockquote>\n' + quote + '</blockquote>\n';
	  };

	  _proto.html = function html(_html) {
	    return _html;
	  };

	  _proto.heading = function heading(text, level, raw, slugger) {
	    if (this.options.headerIds) {
	      return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
	    } // ignore IDs


	    return '<h' + level + '>' + text + '</h' + level + '>\n';
	  };

	  _proto.hr = function hr() {
	    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	  };

	  _proto.list = function list(body, ordered, start) {
	    var type = ordered ? 'ol' : 'ul',
	        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
	    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
	  };

	  _proto.listitem = function listitem(text) {
	    return '<li>' + text + '</li>\n';
	  };

	  _proto.checkbox = function checkbox(checked) {
	    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
	  };

	  _proto.paragraph = function paragraph(text) {
	    return '<p>' + text + '</p>\n';
	  };

	  _proto.table = function table(header, body) {
	    if (body) body = '<tbody>' + body + '</tbody>';
	    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
	  };

	  _proto.tablerow = function tablerow(content) {
	    return '<tr>\n' + content + '</tr>\n';
	  };

	  _proto.tablecell = function tablecell(content, flags) {
	    var type = flags.header ? 'th' : 'td';
	    var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
	    return tag + content + '</' + type + '>\n';
	  } // span level renderer
	  ;

	  _proto.strong = function strong(text) {
	    return '<strong>' + text + '</strong>';
	  };

	  _proto.em = function em(text) {
	    return '<em>' + text + '</em>';
	  };

	  _proto.codespan = function codespan(text) {
	    return '<code>' + text + '</code>';
	  };

	  _proto.br = function br() {
	    return this.options.xhtml ? '<br/>' : '<br>';
	  };

	  _proto.del = function del(text) {
	    return '<del>' + text + '</del>';
	  };

	  _proto.link = function link(href, title, text) {
	    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

	    if (href === null) {
	      return text;
	    }

	    var out = '<a href="' + escape(href) + '"';

	    if (title) {
	      out += ' title="' + title + '"';
	    }

	    out += '>' + text + '</a>';
	    return out;
	  };

	  _proto.image = function image(href, title, text) {
	    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

	    if (href === null) {
	      return text;
	    }

	    var out = '<img src="' + href + '" alt="' + text + '"';

	    if (title) {
	      out += ' title="' + title + '"';
	    }

	    out += this.options.xhtml ? '/>' : '>';
	    return out;
	  };

	  _proto.text = function text(_text) {
	    return _text;
	  };

	  return Renderer;
	}();

	/**
	 * TextRenderer
	 * returns only the textual part of the token
	 */
	var TextRenderer = /*#__PURE__*/function () {
	  function TextRenderer() {}

	  var _proto = TextRenderer.prototype;

	  // no need for block level renderers
	  _proto.strong = function strong(text) {
	    return text;
	  };

	  _proto.em = function em(text) {
	    return text;
	  };

	  _proto.codespan = function codespan(text) {
	    return text;
	  };

	  _proto.del = function del(text) {
	    return text;
	  };

	  _proto.html = function html(text) {
	    return text;
	  };

	  _proto.text = function text(_text) {
	    return _text;
	  };

	  _proto.link = function link(href, title, text) {
	    return '' + text;
	  };

	  _proto.image = function image(href, title, text) {
	    return '' + text;
	  };

	  _proto.br = function br() {
	    return '';
	  };

	  return TextRenderer;
	}();

	/**
	 * Slugger generates header id
	 */
	var Slugger = /*#__PURE__*/function () {
	  function Slugger() {
	    this.seen = {};
	  }

	  var _proto = Slugger.prototype;

	  _proto.serialize = function serialize(value) {
	    return value.toLowerCase().trim() // remove html tags
	    .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
	    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
	  }
	  /**
	   * Finds the next safe (unique) slug to use
	   */
	  ;

	  _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
	    var slug = originalSlug;
	    var occurenceAccumulator = 0;

	    if (this.seen.hasOwnProperty(slug)) {
	      occurenceAccumulator = this.seen[originalSlug];

	      do {
	        occurenceAccumulator++;
	        slug = originalSlug + '-' + occurenceAccumulator;
	      } while (this.seen.hasOwnProperty(slug));
	    }

	    if (!isDryRun) {
	      this.seen[originalSlug] = occurenceAccumulator;
	      this.seen[slug] = 0;
	    }

	    return slug;
	  }
	  /**
	   * Convert string to unique id
	   * @param {object} options
	   * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
	   */
	  ;

	  _proto.slug = function slug(value, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var slug = this.serialize(value);
	    return this.getNextSafeSlug(slug, options.dryrun);
	  };

	  return Slugger;
	}();

	/**
	 * Parsing & Compiling
	 */

	var Parser = /*#__PURE__*/function () {
	  function Parser(options) {
	    this.options = options || exports.defaults;
	    this.options.renderer = this.options.renderer || new Renderer();
	    this.renderer = this.options.renderer;
	    this.renderer.options = this.options;
	    this.textRenderer = new TextRenderer();
	    this.slugger = new Slugger();
	  }
	  /**
	   * Static Parse Method
	   */


	  Parser.parse = function parse(tokens, options) {
	    var parser = new Parser(options);
	    return parser.parse(tokens);
	  }
	  /**
	   * Static Parse Inline Method
	   */
	  ;

	  Parser.parseInline = function parseInline(tokens, options) {
	    var parser = new Parser(options);
	    return parser.parseInline(tokens);
	  }
	  /**
	   * Parse Loop
	   */
	  ;

	  var _proto = Parser.prototype;

	  _proto.parse = function parse(tokens, top) {
	    if (top === void 0) {
	      top = true;
	    }

	    var out = '',
	        i,
	        j,
	        k,
	        l2,
	        l3,
	        row,
	        cell,
	        header,
	        body,
	        token,
	        ordered,
	        start,
	        loose,
	        itemBody,
	        item,
	        checked,
	        task,
	        checkbox,
	        ret;
	    var l = tokens.length;

	    for (i = 0; i < l; i++) {
	      token = tokens[i]; // Run any renderer extensions

	      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
	        ret = this.options.extensions.renderers[token.type].call({
	          parser: this
	        }, token);

	        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
	          out += ret || '';
	          continue;
	        }
	      }

	      switch (token.type) {
	        case 'space':
	          {
	            continue;
	          }

	        case 'hr':
	          {
	            out += this.renderer.hr();
	            continue;
	          }

	        case 'heading':
	          {
	            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
	            continue;
	          }

	        case 'code':
	          {
	            out += this.renderer.code(token.text, token.lang, token.escaped);
	            continue;
	          }

	        case 'table':
	          {
	            header = ''; // header

	            cell = '';
	            l2 = token.header.length;

	            for (j = 0; j < l2; j++) {
	              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
	                header: true,
	                align: token.align[j]
	              });
	            }

	            header += this.renderer.tablerow(cell);
	            body = '';
	            l2 = token.rows.length;

	            for (j = 0; j < l2; j++) {
	              row = token.rows[j];
	              cell = '';
	              l3 = row.length;

	              for (k = 0; k < l3; k++) {
	                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
	                  header: false,
	                  align: token.align[k]
	                });
	              }

	              body += this.renderer.tablerow(cell);
	            }

	            out += this.renderer.table(header, body);
	            continue;
	          }

	        case 'blockquote':
	          {
	            body = this.parse(token.tokens);
	            out += this.renderer.blockquote(body);
	            continue;
	          }

	        case 'list':
	          {
	            ordered = token.ordered;
	            start = token.start;
	            loose = token.loose;
	            l2 = token.items.length;
	            body = '';

	            for (j = 0; j < l2; j++) {
	              item = token.items[j];
	              checked = item.checked;
	              task = item.task;
	              itemBody = '';

	              if (item.task) {
	                checkbox = this.renderer.checkbox(checked);

	                if (loose) {
	                  if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
	                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

	                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
	                      item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
	                    }
	                  } else {
	                    item.tokens.unshift({
	                      type: 'text',
	                      text: checkbox
	                    });
	                  }
	                } else {
	                  itemBody += checkbox;
	                }
	              }

	              itemBody += this.parse(item.tokens, loose);
	              body += this.renderer.listitem(itemBody, task, checked);
	            }

	            out += this.renderer.list(body, ordered, start);
	            continue;
	          }

	        case 'html':
	          {
	            // TODO parse inline content if parameter markdown=1
	            out += this.renderer.html(token.text);
	            continue;
	          }

	        case 'paragraph':
	          {
	            out += this.renderer.paragraph(this.parseInline(token.tokens));
	            continue;
	          }

	        case 'text':
	          {
	            body = token.tokens ? this.parseInline(token.tokens) : token.text;

	            while (i + 1 < l && tokens[i + 1].type === 'text') {
	              token = tokens[++i];
	              body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
	            }

	            out += top ? this.renderer.paragraph(body) : body;
	            continue;
	          }

	        default:
	          {
	            var errMsg = 'Token with "' + token.type + '" type was not found.';

	            if (this.options.silent) {
	              console.error(errMsg);
	              return;
	            } else {
	              throw new Error(errMsg);
	            }
	          }
	      }
	    }

	    return out;
	  }
	  /**
	   * Parse Inline Tokens
	   */
	  ;

	  _proto.parseInline = function parseInline(tokens, renderer) {
	    renderer = renderer || this.renderer;
	    var out = '',
	        i,
	        token,
	        ret;
	    var l = tokens.length;

	    for (i = 0; i < l; i++) {
	      token = tokens[i]; // Run any renderer extensions

	      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
	        ret = this.options.extensions.renderers[token.type].call({
	          parser: this
	        }, token);

	        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
	          out += ret || '';
	          continue;
	        }
	      }

	      switch (token.type) {
	        case 'escape':
	          {
	            out += renderer.text(token.text);
	            break;
	          }

	        case 'html':
	          {
	            out += renderer.html(token.text);
	            break;
	          }

	        case 'link':
	          {
	            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
	            break;
	          }

	        case 'image':
	          {
	            out += renderer.image(token.href, token.title, token.text);
	            break;
	          }

	        case 'strong':
	          {
	            out += renderer.strong(this.parseInline(token.tokens, renderer));
	            break;
	          }

	        case 'em':
	          {
	            out += renderer.em(this.parseInline(token.tokens, renderer));
	            break;
	          }

	        case 'codespan':
	          {
	            out += renderer.codespan(token.text);
	            break;
	          }

	        case 'br':
	          {
	            out += renderer.br();
	            break;
	          }

	        case 'del':
	          {
	            out += renderer.del(this.parseInline(token.tokens, renderer));
	            break;
	          }

	        case 'text':
	          {
	            out += renderer.text(token.text);
	            break;
	          }

	        default:
	          {
	            var errMsg = 'Token with "' + token.type + '" type was not found.';

	            if (this.options.silent) {
	              console.error(errMsg);
	              return;
	            } else {
	              throw new Error(errMsg);
	            }
	          }
	      }
	    }

	    return out;
	  };

	  return Parser;
	}();

	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  // throw error in case of non string input
	  if (typeof src === 'undefined' || src === null) {
	    throw new Error('marked(): input parameter is undefined or null');
	  }

	  if (typeof src !== 'string') {
	    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
	  }

	  if (typeof opt === 'function') {
	    callback = opt;
	    opt = null;
	  }

	  opt = merge({}, marked.defaults, opt || {});
	  checkSanitizeDeprecation(opt);

	  if (callback) {
	    var highlight = opt.highlight;
	    var tokens;

	    try {
	      tokens = Lexer.lex(src, opt);
	    } catch (e) {
	      return callback(e);
	    }

	    var done = function done(err) {
	      var out;

	      if (!err) {
	        try {
	          if (opt.walkTokens) {
	            marked.walkTokens(tokens, opt.walkTokens);
	          }

	          out = Parser.parse(tokens, opt);
	        } catch (e) {
	          err = e;
	        }
	      }

	      opt.highlight = highlight;
	      return err ? callback(err) : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;
	    if (!tokens.length) return done();
	    var pending = 0;
	    marked.walkTokens(tokens, function (token) {
	      if (token.type === 'code') {
	        pending++;
	        setTimeout(function () {
	          highlight(token.text, token.lang, function (err, code) {
	            if (err) {
	              return done(err);
	            }

	            if (code != null && code !== token.text) {
	              token.text = code;
	              token.escaped = true;
	            }

	            pending--;

	            if (pending === 0) {
	              done();
	            }
	          });
	        }, 0);
	      }
	    });

	    if (pending === 0) {
	      done();
	    }

	    return;
	  }

	  try {
	    var _tokens = Lexer.lex(src, opt);

	    if (opt.walkTokens) {
	      marked.walkTokens(_tokens, opt.walkTokens);
	    }

	    return Parser.parse(_tokens, opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

	    if (opt.silent) {
	      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
	    }

	    throw e;
	  }
	}
	/**
	 * Options
	 */

	marked.options = marked.setOptions = function (opt) {
	  merge(marked.defaults, opt);
	  changeDefaults(marked.defaults);
	  return marked;
	};

	marked.getDefaults = getDefaults;
	marked.defaults = exports.defaults;
	/**
	 * Use Extension
	 */

	marked.use = function () {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var opts = merge.apply(void 0, [{}].concat(args));
	  var extensions = marked.defaults.extensions || {
	    renderers: {},
	    childTokens: {}
	  };
	  var hasExtensions;
	  args.forEach(function (pack) {
	    // ==-- Parse "addon" extensions --== //
	    if (pack.extensions) {
	      hasExtensions = true;
	      pack.extensions.forEach(function (ext) {
	        if (!ext.name) {
	          throw new Error('extension name required');
	        }

	        if (ext.renderer) {
	          // Renderer extensions
	          var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;

	          if (prevRenderer) {
	            // Replace extension with func to run new extension but fall back if false
	            extensions.renderers[ext.name] = function () {
	              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	              }

	              var ret = ext.renderer.apply(this, args);

	              if (ret === false) {
	                ret = prevRenderer.apply(this, args);
	              }

	              return ret;
	            };
	          } else {
	            extensions.renderers[ext.name] = ext.renderer;
	          }
	        }

	        if (ext.tokenizer) {
	          // Tokenizer Extensions
	          if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
	            throw new Error("extension level must be 'block' or 'inline'");
	          }

	          if (extensions[ext.level]) {
	            extensions[ext.level].unshift(ext.tokenizer);
	          } else {
	            extensions[ext.level] = [ext.tokenizer];
	          }

	          if (ext.start) {
	            // Function to check for start of token
	            if (ext.level === 'block') {
	              if (extensions.startBlock) {
	                extensions.startBlock.push(ext.start);
	              } else {
	                extensions.startBlock = [ext.start];
	              }
	            } else if (ext.level === 'inline') {
	              if (extensions.startInline) {
	                extensions.startInline.push(ext.start);
	              } else {
	                extensions.startInline = [ext.start];
	              }
	            }
	          }
	        }

	        if (ext.childTokens) {
	          // Child tokens to be visited by walkTokens
	          extensions.childTokens[ext.name] = ext.childTokens;
	        }
	      });
	    } // ==-- Parse "overwrite" extensions --== //


	    if (pack.renderer) {
	      (function () {
	        var renderer = marked.defaults.renderer || new Renderer();

	        var _loop = function _loop(prop) {
	          var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false

	          renderer[prop] = function () {
	            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	              args[_key3] = arguments[_key3];
	            }

	            var ret = pack.renderer[prop].apply(renderer, args);

	            if (ret === false) {
	              ret = prevRenderer.apply(renderer, args);
	            }

	            return ret;
	          };
	        };

	        for (var prop in pack.renderer) {
	          _loop(prop);
	        }

	        opts.renderer = renderer;
	      })();
	    }

	    if (pack.tokenizer) {
	      (function () {
	        var tokenizer = marked.defaults.tokenizer || new Tokenizer();

	        var _loop2 = function _loop2(prop) {
	          var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false

	          tokenizer[prop] = function () {
	            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	              args[_key4] = arguments[_key4];
	            }

	            var ret = pack.tokenizer[prop].apply(tokenizer, args);

	            if (ret === false) {
	              ret = prevTokenizer.apply(tokenizer, args);
	            }

	            return ret;
	          };
	        };

	        for (var prop in pack.tokenizer) {
	          _loop2(prop);
	        }

	        opts.tokenizer = tokenizer;
	      })();
	    } // ==-- Parse WalkTokens extensions --== //


	    if (pack.walkTokens) {
	      var _walkTokens = marked.defaults.walkTokens;

	      opts.walkTokens = function (token) {
	        pack.walkTokens.call(this, token);

	        if (_walkTokens) {
	          _walkTokens.call(this, token);
	        }
	      };
	    }

	    if (hasExtensions) {
	      opts.extensions = extensions;
	    }

	    marked.setOptions(opts);
	  });
	};
	/**
	 * Run callback for every token
	 */


	marked.walkTokens = function (tokens, callback) {
	  var _loop3 = function _loop3() {
	    var token = _step.value;
	    callback.call(marked, token);

	    switch (token.type) {
	      case 'table':
	        {
	          for (var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;) {
	            var cell = _step2.value;
	            marked.walkTokens(cell.tokens, callback);
	          }

	          for (var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;) {
	            var row = _step3.value;

	            for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
	              var _cell = _step4.value;
	              marked.walkTokens(_cell.tokens, callback);
	            }
	          }

	          break;
	        }

	      case 'list':
	        {
	          marked.walkTokens(token.items, callback);
	          break;
	        }

	      default:
	        {
	          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
	            // Walk any extensions
	            marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
	              marked.walkTokens(token[childTokens], callback);
	            });
	          } else if (token.tokens) {
	            marked.walkTokens(token.tokens, callback);
	          }
	        }
	    }
	  };

	  for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
	    _loop3();
	  }
	};
	/**
	 * Parse Inline
	 */


	marked.parseInline = function (src, opt) {
	  // throw error in case of non string input
	  if (typeof src === 'undefined' || src === null) {
	    throw new Error('marked.parseInline(): input parameter is undefined or null');
	  }

	  if (typeof src !== 'string') {
	    throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
	  }

	  opt = merge({}, marked.defaults, opt || {});
	  checkSanitizeDeprecation(opt);

	  try {
	    var tokens = Lexer.lexInline(src, opt);

	    if (opt.walkTokens) {
	      marked.walkTokens(tokens, opt.walkTokens);
	    }

	    return Parser.parseInline(tokens, opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

	    if (opt.silent) {
	      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
	    }

	    throw e;
	  }
	};
	/**
	 * Expose
	 */


	marked.Parser = Parser;
	marked.parser = Parser.parse;
	marked.Renderer = Renderer;
	marked.TextRenderer = TextRenderer;
	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;
	marked.Tokenizer = Tokenizer;
	marked.Slugger = Slugger;
	marked.parse = marked;
	var options = marked.options;
	var setOptions = marked.setOptions;
	var use = marked.use;
	var walkTokens = marked.walkTokens;
	var parseInline = marked.parseInline;
	var parse = marked;
	var parser = Parser.parse;
	var lexer = Lexer.lex;

	exports.Lexer = Lexer;
	exports.Parser = Parser;
	exports.Renderer = Renderer;
	exports.Slugger = Slugger;
	exports.TextRenderer = TextRenderer;
	exports.Tokenizer = Tokenizer;
	exports.getDefaults = getDefaults;
	exports.lexer = lexer;
	exports.marked = marked;
	exports.options = options;
	exports.parse = parse;
	exports.parseInline = parseInline;
	exports.parser = parser;
	exports.setOptions = setOptions;
	exports.use = use;
	exports.walkTokens = walkTokens;
	}(marked));

	var __awaiter$2 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	Object.defineProperty(Instructions$1, "__esModule", { value: true });
	Instructions$1.Instructions = void 0;
	const assessmentcentre_api_client_1$2 = build$1;
	const marked_1 = marked;
	const DOMManipulator_1 = DOMManipulator$1;
	class Instructions extends DOMManipulator_1.DOMManipulator {
	    getRequiredElementIDs() {
	        return ["instructions"];
	    }
	    start() {
	        return __awaiter$2(this, void 0, void 0, function* () {
	            document.getElementById("instructions").innerHTML = (0, marked_1.parse)((yield new assessmentcentre_api_client_1$2.AssessmentCentreClient().getAsync()).Instructions);
	        });
	    }
	}
	Instructions$1.Instructions = Instructions;

	var GameModuleHelper$1 = {};

	var build = {};

	var GameModuleRepository$1 = {};

	var ModuleType = {};

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModuleType = void 0;
	(function (ModuleType) {
	    ModuleType[ModuleType["FruitBots"] = 0] = "FruitBots";
	    ModuleType[ModuleType["NoughtsAndCrosses"] = 1] = "NoughtsAndCrosses";
	    ModuleType[ModuleType["ShootingRange"] = 2] = "ShootingRange";
	})(exports.ModuleType || (exports.ModuleType = {}));

	}(ModuleType));

	var Module$2 = {};

	var competition = {};

	var bots = {};

	Object.defineProperty(bots, "__esModule", { value: true });
	bots.Bots = void 0;
	bots.Bots = {
	    "RandomBot": `function play(location, fruitLocations, turnNumber) {
        if(fruitLocations.find(fruit => fruit.row == location.row && fruit.col == location.col)) return "TAKE";
        
        return ["NORTH", "EAST", "SOUTH", "WEST"][Math.floor(Math.random() * 4)];
    }`,
	    "TotallyRandomBot": `function play(location, fruitLocations, turnNumber) {       
        return ["NORTH", "EAST", "SOUTH", "WEST", "TAKE"][Math.floor(Math.random() * 5)];
    }`,
	    "PassBot": `function play(location, fruitLocations, turnNumber) {
        return "PASS";
    }`,
	    "SimplePathBot": `function play(location, fruitLocations, turnNumber) {
        if(fruitLocations.find(fruit => fruit.row == location.row && fruit.col == location.col)) return "TAKE";
        
        if(isOdd(location.row)){
            return attemptWestMove(location);
        } else {
            return attemptEastMove(location);
        }
    
        // Before refactoring:
        //if(location.row === 0){
        //    return rightBound(location);
        //}
        //if(location.row === 1){
        //    return leftBound(location);
        //}
        //if(location.row === 2){
        //    return rightBound(location);
        //}
        //if(location.row === 3){
        //    return leftBound(location);
        //}
        //if(location.row === 4){
        //    return rightBound(location);
        //}
        //if(location.row === 5){
        //    return leftBound(location);
        //}
    }
    
    function attemptEastMove(location){
        if(location.col < 5){
            return "EAST";
        }
        else {
            return "SOUTH";
        }
    }
    
    function attemptWestMove(location){
        if(location.col > 0){
            return "WEST";
        }
        else {
            return "SOUTH";
        }
    }
    
    function isOdd(row) 
    { 
        return row % 2;
    }`
	};

	var engine$1 = {};

	Object.defineProperty(engine$1, "__esModule", { value: true });
	engine$1.Engine = void 0;
	function Engine$2(playerOneAI, playerTwoAI, outputFunction, logDetailLevel) {
	    var fruitLocations = [];
	    var players = [];
	    var gridSize = 6;
	    var fruitCount = 10;
	    var turnNumber = 0;
	    var output = console.log.bind(console);
	    var logDetailLevelOrDefault = logDetailLevel || 0;
	    var FruitStatus = {
	        AVAILABLE: "AVAILABLE",
	        BEING_TAKEN: "BEING_TAKEN",
	        NONE_PRESENT: "NONE_PRESENT"
	    };
	    var result = {
	        winner: "-1",
	        wasGameTimedOut: false,
	        players: {
	            0: {
	                madeValidMoves: true,
	                score: 0
	            },
	            1: {
	                madeValidMoves: true,
	                score: 0
	            }
	        }
	    };
	    if (typeof outputFunction === "function") {
	        output = outputFunction;
	    }
	    (function init() {
	        var possibleLocations = [];
	        for (var row = 0; row < gridSize; row++) {
	            for (var col = 0; col < gridSize; col++) {
	                possibleLocations.push({ row: row, col: col, fruitStatus: FruitStatus.NONE_PRESENT });
	            }
	        }
	        var shuffledGridSquares = _arrayShuffle(possibleLocations);
	        fruitLocations = shuffledGridSquares.slice(0, fruitCount + 1);
	        fruitLocations = fruitLocations.map(function (location) {
	            return {
	                row: location.row,
	                col: location.col,
	                fruitStatus: FruitStatus.AVAILABLE,
	                playersCollected: []
	            };
	        });
	        players[0] = _createPlayer(0, playerOneAI);
	        players[1] = _createPlayer(1, playerTwoAI);
	    }());
	    function _createPlayer(number, AI) {
	        return {
	            number: number,
	            AI: AI,
	            position: { row: 0, col: 0 },
	            score: 0
	        };
	    }
	    function _arrayShuffle(array) {
	        var currentIndex = array.length, temporaryValue, randomIndex;
	        // While there remain elements to shuffle...
	        while (0 !== currentIndex) {
	            // Pick a remaining element...
	            randomIndex = Math.floor(Math.random() * currentIndex);
	            currentIndex -= 1;
	            // And swap it with the current element.
	            temporaryValue = array[currentIndex];
	            array[currentIndex] = array[randomIndex];
	            array[randomIndex] = temporaryValue;
	        }
	        return array;
	    }
	    function _getRenderedCell(position) {
	        var cellChars = ["_", "_", "_"];
	        if (players[0].position.row == position.row && players[0].position.col == position.col) {
	            cellChars[0] = "0";
	        }
	        if (players[1].position.row == position.row && players[1].position.col == position.col) {
	            cellChars[1] = "1";
	        }
	        if (fruitLocations.find(item => item.row == position.row && item.col == position.col)) {
	            cellChars[2] = "*";
	        }
	        return cellChars.join('');
	    }
	    function _viewBoard() {
	        for (var row = 0; row < gridSize; row++) {
	            var rowString = "";
	            for (var col = 0; col < gridSize; col++) {
	                rowString += ` ${_getRenderedCell({ row: row, col: col })} |`;
	            }
	            _out(rowString, 2);
	        }
	        _out("Scores:", 2);
	        players.forEach(player => _out(`Player ${player.number}: ${player.score}`, 2));
	        _out("", 2);
	    }
	    function _out(text, detailLevel) {
	        if (detailLevel != null && detailLevel <= logDetailLevelOrDefault) {
	            output(text);
	        }
	    }
	    function _doesSquareExist(row, col) {
	        return row >= 0 && row <= (gridSize - 1) &&
	            col >= 0 && col <= (gridSize - 1);
	    }
	    function _move(playerNumber, square) {
	        if (_doesSquareExist(square.row, square.col)) {
	            players[playerNumber].position = square;
	            return true;
	        }
	        return false;
	    }
	    function _take(playerNumber) {
	        var playerPos = players[playerNumber].position;
	        for (var i = 0; i < fruitLocations.length; i++) {
	            if (playerPos.row == fruitLocations[i].row && playerPos.col == fruitLocations[i].col) {
	                fruitLocations[i].fruitStatus = FruitStatus.BEING_TAKEN;
	                fruitLocations[i].playersCollected.push(playerNumber);
	                return true;
	            }
	        }
	        return false;
	    }
	    function _addScoreForTakenFruit() {
	        for (var i = 0; i < fruitLocations.length; i++) {
	            if (fruitLocations[i].fruitStatus == FruitStatus.BEING_TAKEN) {
	                fruitLocations[i].playersCollected.forEach((playerNumber) => players[playerNumber].score += 1);
	            }
	        }
	    }
	    function _removeTakenFruit() {
	        for (var i = 0; i < fruitLocations.length; i++) {
	            if (fruitLocations[i].fruitStatus == FruitStatus.BEING_TAKEN) {
	                fruitLocations.splice(i, 1);
	            }
	        }
	    }
	    function processPlayerTurn(playerNumber, instruction) {
	        if (playerNumber < 0 || playerNumber >= players.length) {
	            _out("ERROR: Engine attempted to process a move for a non-existent player.", 0);
	        }
	        switch (instruction) {
	            case "NORTH":
	                return _move(playerNumber, {
	                    row: players[playerNumber].position.row - 1,
	                    col: players[playerNumber].position.col
	                });
	            case "EAST":
	                return _move(playerNumber, {
	                    row: players[playerNumber].position.row,
	                    col: players[playerNumber].position.col + 1
	                });
	            case "SOUTH":
	                return _move(playerNumber, {
	                    row: players[playerNumber].position.row + 1,
	                    col: players[playerNumber].position.col
	                });
	            case "WEST":
	                return _move(playerNumber, {
	                    row: players[playerNumber].position.row,
	                    col: players[playerNumber].position.col - 1
	                });
	            case "TAKE":
	                return _take(playerNumber);
	            case "PASS":
	                return true;
	            default:
	                return false;
	        }
	    }
	    function _clonePosition(position) {
	        return {
	            row: position.row,
	            col: position.col
	        };
	    }
	    function _clonePositionArray(positionArray) {
	        return positionArray.map(_clonePosition);
	    }
	    function playTurn() {
	        var log = console.log;
	        console.log = (value) => {
	            _out(value, 2);
	        };
	        turnNumber++;
	        for (var i = 0; i < players.length; i++) {
	            var validMove = false;
	            try {
	                var command = players[i].AI(_clonePosition(players[i].position), _clonePositionArray(fruitLocations), turnNumber);
	                if (typeof command === "string") {
	                    command = command.toUpperCase();
	                }
	                _out(`Player ${i} has selected command: ${command}.`, 2);
	                validMove = processPlayerTurn(i, command);
	            }
	            catch (e) {
	                _out(e.toString(), 2);
	            }
	            result.players[i].madeValidMoves = result.players[i].madeValidMoves && validMove;
	        }
	        _addScoreForTakenFruit();
	        _removeTakenFruit();
	        _viewBoard();
	        console.log = log;
	        if (fruitLocations.length == 0 || turnNumber > 100) {
	            // TODO: One day nice to handle more than two players? At the moment this is the only code holding us back for that.
	            if (players[0].score > players[1].score) {
	                result.winner = "0";
	            }
	            else if (players[1].score > players[0].score) {
	                result.winner = "1";
	            }
	            else if (turnNumber > 100) {
	                //Unnecessary since -1 is the initialised value, but here for clarity: -1 represents a draw
	                result.winner = "-1";
	                result.wasGameTimedOut = true;
	            }
	            else {
	                //Unnecessary since -1 is the initialised value, but here for clarity: -1 represents a draw
	                result.winner = "-1";
	            }
	            if (result.winner !== "-1") {
	                _out("Game over! Winner was player " + result.winner + "!", 1);
	            }
	            else if (turnNumber > 100) {
	                _out("Game over! The game ended as there were still fruit on the board after 100 turns!", 1);
	            }
	            else {
	                _out("Game over! The game was tied!", 1);
	            }
	            return result;
	        }
	    }
	    function playGame() {
	        while (true) {
	            var result = playTurn();
	            if (result != null) {
	                return result;
	            }
	        }
	    }
	    return {
	        playGame: playGame,
	        playTurn: playTurn
	    };
	}
	engine$1.Engine = Engine$2;

	Object.defineProperty(competition, "__esModule", { value: true });
	competition.CreateNewTournament = void 0;
	const bots_1 = bots;
	const engine_1$3 = engine$1;
	function CreateNewTournament$2() {
	    var publicAPI = {
	        addPlayer: addPlayer,
	        submitPlayerCode: submitPlayerCode,
	        runTournament: runTournament
	    };
	    var players = [];
	    _addBots();
	    function _addBots() {
	        for (var botName in bots_1.Bots) {
	            submitPlayerCode(botName, bots_1.Bots[botName]);
	        }
	    }
	    function submitPlayerCode(name, code) {
	        var player = players.find(function (player) {
	            return player.name == name;
	        });
	        if (player != null) {
	            if (player.code != null) {
	                player.oldSubmissions.push(player.code);
	            }
	            player.code = code;
	            //fs.appendFileSync(`submissions/${player.name}_code_.js`, code + "\r\n \r\n//-------------------------------------\r\n \r\n ");
	        }
	        else {
	            name = addPlayer(name);
	            submitPlayerCode(name, code);
	        }
	        return name;
	    }
	    function addPlayer(name) {
	        if (players.find(function (player) {
	            return player.name == name;
	        }) == null) {
	            players.push({
	                name: name,
	                oldSubmissions: [],
	                wins: 0,
	                losses: 0,
	                draws: 0,
	                validGames: 0,
	                score: 0,
	                played: 0,
	                validlyPlayedGames: 0
	            });
	        }
	        return name;
	    }
	    function AIWrapper(submission) {
	        return function (location, fruitLocations, turnNumber) {
	            return eval(`${submission}; play(location, fruitLocations, turnNumber);`);
	        };
	    }
	    function convertToOutputResultFormat(players) {
	        return players.map((player) => {
	            return {
	                results: {
	                    played: {
	                        value: player.played,
	                        order: 0,
	                        heading: "Played",
	                        focus: true
	                    },
	                    wins: {
	                        value: player.wins,
	                        order: 1,
	                        heading: "Wins",
	                        focus: false,
	                        color: "green"
	                    },
	                    draws: {
	                        value: player.draws,
	                        order: 2,
	                        heading: "Draws",
	                        focus: false,
	                        color: "yellow"
	                    },
	                    timeouts: {
	                        value: player.timeouts,
	                        order: 3,
	                        heading: "Timeouts",
	                        focus: false,
	                        color: "grey"
	                    },
	                    losses: {
	                        value: player.losses,
	                        order: 4,
	                        heading: "Losses",
	                        focus: false,
	                        color: "red"
	                    },
	                    validlyPlayedGames: {
	                        value: player.validlyPlayedGames,
	                        order: 5,
	                        heading: "Valid Games",
	                        focus: false,
	                        color: "purple"
	                    },
	                    score: {
	                        value: player.score,
	                        order: 6,
	                        heading: "Points",
	                        focus: true,
	                        showInMinimalView: true
	                    }
	                },
	                name: player.name,
	                code: player.code,
	                oldSubmissions: player.oldSubmissions
	            };
	        });
	    }
	    function _getMatchups() {
	        var matchups = [];
	        var playersWithCode = players.filter(function (player) {
	            return player.code != null;
	        });
	        for (var i = 0; i < playersWithCode.length; i++) {
	            for (var j = 0; j < playersWithCode.length; j++) {
	                if (j !== i) {
	                    var matchup = {};
	                    matchup[0] = playersWithCode[i];
	                    matchup[1] = playersWithCode[j];
	                    matchups.push(matchup);
	                }
	            }
	        }
	        return matchups;
	    }
	    function _addScore(player, result) {
	        switch (result) {
	            case "timeout":
	                player.score += 1;
	                player.timeouts++;
	                break;
	            case "draw":
	                player.score += 3;
	                player.draws++;
	                break;
	            case "win":
	                player.score += 4;
	                player.wins++;
	                break;
	            case "loss":
	                player.losses++;
	                break;
	            case "validMovesBonus":
	                player.score += 2;
	                player.validlyPlayedGames++;
	                break;
	        }
	    }
	    function _resetScores() {
	        players.forEach(function (player) {
	            player.wins = 0;
	            player.losses = 0;
	            player.draws = 0;
	            player.timeouts = 0;
	            player.validGames = 0;
	            player.score = 0;
	            player.played = 0;
	            player.validlyPlayedGames = 0;
	        });
	    }
	    function runTournament(gamesPerMatchup) {
	        if (gamesPerMatchup == null) {
	            gamesPerMatchup = 1;
	        }
	        if (gamesPerMatchup > 100) {
	            gamesPerMatchup = 100;
	        }
	        else if (gamesPerMatchup < 1) {
	            gamesPerMatchup = 1;
	        }
	        _resetScores();
	        var matchups = _getMatchups();
	        matchups.forEach(function (match) {
	            for (var i = 0; i < gamesPerMatchup; i++) {
	                var engine = (0, engine_1$3.Engine)(AIWrapper(match[0].code), AIWrapper(match[1].code));
	                var winner = engine.playGame();
	                var result = winner;
	                for (var playerNumberString in match) {
	                    var playerIndex = Number(playerNumberString);
	                    var player = match[playerIndex];
	                    player.played++;
	                    if (Number(result.winner) === playerIndex) {
	                        _addScore(player, "win");
	                    }
	                    else if (Number(result.winner) === -1) {
	                        if (result.wasGameTimedOut) {
	                            _addScore(player, "timeout");
	                        }
	                        else {
	                            _addScore(player, "draw");
	                        }
	                    }
	                    else {
	                        _addScore(player, "loss");
	                    }
	                    if (result.players[playerIndex].madeValidMoves) {
	                        _addScore(player, "validMovesBonus");
	                    }
	                }
	            }
	        });
	        return convertToOutputResultFormat(players);
	    }
	    return publicAPI;
	}
	competition.CreateNewTournament = CreateNewTournament$2;

	Object.defineProperty(Module$2, "__esModule", { value: true });
	Module$2.Module = void 0;
	const competition_1 = competition;
	const engine_1$2 = engine$1;
	Module$2.Module = {
	    ModuleID: "FruitBots",
	    LocalTestOpponent: `function play(location, fruitLocations, turnNumber) {
if(fruitLocations.find(fruit => fruit.row == location.row && fruit.col == location.col)) return "TAKE";
return ["NORTH", "EAST", "SOUTH", "WEST"][Math.floor(Math.random() * 4)];
}`,
	    LocalPlayerNames: [
	        "Player 0",
	        "Player 1"
	    ],
	    Instructions: `# Introduction
You are required to implement a JavaScript function that is able to choose a <em>single</em> move in the game FoodHunt, given the current game state.

FoodHunt is a game in which two AI Bots are placed on the starting position (row: 0, col: 0) on a square grid of 6 x 6 cells, where the top-left cell is at (row: 0, col: 0), and the bottom-right cell is (row: 5, col: 5). On some of these cells, there are pieces of fruit which the bots need to eat! In the game, bots attempt to pick up as many of these fruit as they can, scoring one point for each fruit they collect. Highest score wins!

Every turn, each bot can take *one* action, chosen by returning a single string from the function containing their code. The action the bot takes can be: "NORTH", "EAST", "SOUTH", "WEST", "TAKE" or "PASS".

NORTH, EAST, SOUTH and WEST cause the bot to attempt to move in the corresponding direction (Up, right, down, left). 

TAKE will pick up a fruit if the bot is positioned in the same cell as a fruit. (Note: If both bots attempt to pick up the same fruit on the same turn, they both receive a point).

Bots can choose to PASS if they do not want to take an action on the turn. This is considered a valid move (See scoring for further information).

# The Game Board
As previously mentioned, the game board is 6x6, running from (0,0) in the top-left to (5,5) in the bottom right. When playing a local test game (explained more below) the board will be displayed like this:

_1_ | 0__ | ___ | ___ | ___ | ___ |
___ | ___ | __* | ___ | ___ | __* |
__* | ___ | ___ | ___ | ___ | __* |
__* | ___ | __* | __* | __* | ___ |
___ | ___ | ___ | ___ | ___ | __* |
___ | ___ | ___ | __* | ___ | __* |

In this visualisation, cells are separated from one another by the "|" character. You can see the locations of players 0 and 1 from the location of the characters "0" and "1" respectively. The locations of fruit are displayed using the "*" character. 

# The Function
You are given the function 'play(location, fruitLocations, turnNumber)' to implement. You do not need to alter this function signature - just write your code inside this function.

Your function should always return one of the actions listed above, as a string. Returning any other value is invalid, as is returning an action which cannot be carried out in the current game state (ie, "NORTH" when you are at the top of the grid, or "TAKE" when you are not in a cell with fruit.)

Your function is passed three parameters (location, fruitLocations, turnNumber), and will be called each time it is your bot's turn to play.

## location (object) : 

location is an object of the form:

{
    row: <number>
    col: <number>
}

It indicates the current position of your bot on the grid. 

## fruitLocations (array) :

fruitLocations is an array of objects, of the form:

[ {row: <number>, col: <number>}, {row: <number>, col: <number>}, ... ]

Each object in the array represents the position of an item of fruit on the board, which you can move to and pick up.

## turnNumber (number) :

The current turnNumber. This starts at 1, and will increment each time you move. Both players move once on every turn, and you can think of the bots as moving simultaneously.

# Scoring
Your bot will play in a tournament against the other team's bots. It will be scored based on performance. 

A win earns you 4 points.

A draw earns you 3 points.

A draw by timeout earns you 1 point.

A loss earns you 0 points.

Playing a full game without attempting an invalid move (as defined above) earns you a bonus 2 points (on top of your score from winning/drawing/timeout/losing).

When you have a working bot, click "Submit Code" to send the current version to the server to compete in this tournament. You can submit your code as many times as you desire during the allowed time for the task.

# Local Test Games
You are able to test out your bot without submitting it by using the test game in the bottom-right of the development environment. Here you can see how your bot behaves in a game.

# Notes: 
- If your code throws an error, your move will be skipped.
- If your move is invalid, your move will be skipped.
- The game will be drawn if 100 moves are made and no winner has been decided.
- You are able to make as many submissions of your code as you want - each submission is stored for discussion later and we love to see how your solution progressed!
- When running a test game, calling console.log() with a string argument will cause the string you pass to appear as part of the output in the bottom right.
- Feel free to create as many other functions as you feel is helpful, just make sure you keep the signature of the main "play" function exactly as it is!
- Good luck!`,
	    IdePlaceholderCode: `function play(location, fruitLocations, turnNumber) {
return "EAST";
}`,
	    PlayerAIWrapper: function createPlayerAI(submission) {
	        return function (location, fruitLocations, turnNumber) {
	            return eval(`${submission}; play(location, fruitLocations, turnNumber);`);
	        };
	    },
	    CreateTournament: competition_1.CreateNewTournament,
	    RequiredPerformanceGamesPerSecond: 5,
	    Engine: engine_1$2.Engine,
	    EngineFileName: "engine.js"
	};

	var Module$1 = {};

	var Bots$1 = {};

	Object.defineProperty(Bots$1, "__esModule", { value: true });
	Bots$1.Bots = void 0;
	Bots$1.Bots = {
	    "RandomBot": `function move(board, pieces, turnNumber) {
    return {
        row: Math.floor(Math.random() * 3),
        col: Math.floor(Math.random() * 3)
    };
}`,
	    "EmptySpaceBot": `function move(board, pieces, turnNumber) {
    for(var row = 0; row < board.length; row++) {
        for(var col = 0; col < board[row].length; col++) {
            if(board[row][col] === "-") {
                return {
                    row: row,
                    col: col
                };
            }
        }
    }
}`
	};

	var Competition = {};

	var engine = {};

	Object.defineProperty(engine, "__esModule", { value: true });
	engine.Engine = void 0;
	function Engine$1(player1AI, player2AI, outputFunction, detailLevel) {
	    var publicAPI = {
	        playTurn: playTurn,
	        playGame: playGame
	    };
	    var playerIndex = null;
	    var turnNumber = null;
	    var AIs = [];
	    AIs[0] = player1AI || function () { };
	    AIs[1] = player2AI || function () { };
	    var board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
	    var gameOver = false;
	    var players = ['O', 'X'];
	    var result = {
	        winner: "",
	        wasGameTimedOut: false,
	        players: {
	            'O': {
	                madeValidMoves: true,
	                score: 0
	            },
	            'X': {
	                madeValidMoves: true,
	                score: 0
	            }
	        }
	    };
	    var output;
	    (function init() {
	        if (typeof outputFunction === "function") {
	            output = outputFunction;
	        }
	        else {
	            output = console.log.bind(console);
	        }
	    })();
	    function _out(text, detailLevel) {
	        if (detailLevel != null && detailLevel <= detailLevel) {
	            output(text);
	        }
	    }
	    function _checkWin() {
	        // check horizontal win
	        for (var i = 0; i < 3; i++) {
	            if (board[i][0] != '-' && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
	                gameOver = true;
	                return board[i][0];
	            }
	        }
	        // check if vertical win
	        for (var i = 0; i < 3; i++) {
	            if (board[0][i] != '-' && board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
	                gameOver = true;
	                return board[0][i];
	            }
	        }
	        // check if diagonal win
	        if (board[0][0] != '-' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
	            gameOver = true;
	            return board[0][0];
	        }
	        if (board[0][2] != '-' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
	            gameOver = true;
	            return board[0][2];
	        }
	        return false;
	    }
	    function _checkDraw() {
	        if (!_checkWin()) {
	            for (var i = 0; i < 3; i++) {
	                for (var j = 0; j < 3; j++) {
	                    if (board[i][j] == '-') {
	                        return false;
	                    }
	                }
	            }
	            return true;
	        }
	        return false;
	    }
	    function _turn(player, posObj) {
	        if (gameOver)
	            return false;
	        if (!_checkAllowedMove(posObj.row, posObj.col))
	            return false;
	        board[posObj.row][posObj.col] = player;
	        return true;
	    }
	    function _cloneBoard() {
	        return [
	            [board[0][0], board[0][1], board[0][2]],
	            [board[1][0], board[1][1], board[1][2]],
	            [board[2][0], board[2][1], board[2][2]]
	        ];
	    }
	    function _checkAllowedMove(posRow, posCol) {
	        return board[posRow][posCol] == '-';
	    }
	    function _viewBoard() {
	        _out(board[0], 2);
	        _out(board[1], 2);
	        _out(board[2], 2);
	        _out('-----------------', 2);
	    }
	    function playTurn() {
	        if (turnNumber == null)
	            turnNumber = 1;
	        if (playerIndex == null)
	            playerIndex = 0;
	        var win = false;
	        var draw = false;
	        var currentPlayerSymbol = players[playerIndex];
	        var validMove = false;
	        try {
	            var move = AIs[playerIndex](_cloneBoard(), currentPlayerSymbol, turnNumber);
	            _out(`Turn ${turnNumber}, ${players[playerIndex]} plays in (${move.col}, ${move.row}):`, 1);
	            validMove = _turn(players[playerIndex], move);
	        }
	        catch (e) {
	            _out(e, 3);
	        }
	        result.players[currentPlayerSymbol].madeValidMoves = result.players[currentPlayerSymbol].madeValidMoves && validMove;
	        win = _checkWin();
	        draw = _checkDraw();
	        playerIndex = (playerIndex + 1) % 2;
	        turnNumber++;
	        if (turnNumber === 100) {
	            draw = true;
	            result.wasGameTimedOut = true;
	        }
	        _viewBoard();
	        if (win) {
	            _out(win + " wins!", 1);
	            result.winner = win;
	            return result;
	        }
	        else if (draw) {
	            _out("Draw!", 1);
	            result.winner = "-";
	            return result;
	        }
	    }
	    function playGame() {
	        while (true) {
	            var outcome = playTurn();
	            if (outcome != null) {
	                return result;
	            }
	        }
	    }
	    return publicAPI;
	}
	engine.Engine = Engine$1;

	Object.defineProperty(Competition, "__esModule", { value: true });
	Competition.CreateNewTournament = void 0;
	const Bots_1$2 = Bots$1;
	const engine_1$1 = engine;
	function CreateNewTournament$1() {
	    var publicAPI = {
	        addPlayer: addPlayer,
	        submitPlayerCode: submitPlayerCode,
	        runTournament: runTournament
	    };
	    var player1 = "O";
	    var player2 = "X";
	    var players = [];
	    _addBots();
	    function _addBots() {
	        for (var botName in Bots_1$2.Bots) {
	            submitPlayerCode(botName, Bots_1$2.Bots[botName]);
	        }
	    }
	    function submitPlayerCode(name, code) {
	        var player = players.find(function (player) {
	            return player.name == name;
	        });
	        if (player != null) {
	            if (player.code != null) {
	                player.oldSubmissions.push(player.code);
	            }
	            player.code = code;
	            //fs.appendFileSync(`submissions/${player.name}_code_.js`, code + "\r\n \r\n//-------------------------------------\r\n \r\n ");
	        }
	        else {
	            name = addPlayer(name);
	            submitPlayerCode(name, code);
	        }
	        return name;
	    }
	    function addPlayer(name) {
	        if (players.find(function (player) {
	            return player.name == name;
	        }) == null) {
	            players.push({
	                name: name,
	                oldSubmissions: [],
	                score: 0,
	                played: 0,
	                wins: 0,
	                draws: 0,
	                gameTimeouts: 0,
	                losses: 0,
	                validlyPlayedGames: 0,
	            });
	        }
	        return name;
	    }
	    function _getMatchups() {
	        var matchups = [];
	        var playersWithCode = players.filter(function (player) {
	            return player.code != null;
	        });
	        for (var i = 0; i < playersWithCode.length; i++) {
	            for (var j = 0; j < playersWithCode.length; j++) {
	                if (j !== i) {
	                    var matchup = {};
	                    matchup[player1] = playersWithCode[i];
	                    matchup[player2] = playersWithCode[j];
	                    matchups.push(matchup);
	                }
	            }
	        }
	        return matchups;
	    }
	    function AIWrapper(code) {
	        return function (board, pieces, turnNumber) {
	            return eval(code + "; move(board, pieces, turnNumber);");
	        };
	    }
	    function _resetScores() {
	        players.forEach(function (player) {
	            player.score = 0;
	            player.played = 0;
	            player.wins = 0;
	            player.draws = 0;
	            player.gameTimeouts = 0;
	            player.losses = 0;
	            player.validlyPlayedGames = 0;
	        });
	    }
	    function convertToOutputResultFormat(players) {
	        return players.map((player) => {
	            return {
	                results: {
	                    played: {
	                        value: player.played,
	                        order: 0,
	                        heading: "Played",
	                        focus: true
	                    },
	                    wins: {
	                        value: player.wins,
	                        order: 1,
	                        heading: "Wins",
	                        color: "green"
	                    },
	                    draws: {
	                        value: player.draws,
	                        order: 2,
	                        heading: "Draws",
	                        color: "yellow"
	                    },
	                    gameTimeouts: {
	                        value: player.gameTimeouts,
	                        order: 3,
	                        heading: "Timeouts",
	                        color: "grey"
	                    },
	                    losses: {
	                        value: player.losses,
	                        order: 4,
	                        heading: "Losses",
	                        color: "red"
	                    },
	                    validlyPlayedGames: {
	                        value: player.validlyPlayedGames,
	                        order: 5,
	                        heading: "Valid Games",
	                        color: "purple"
	                    },
	                    score: {
	                        value: player.score,
	                        order: 6,
	                        heading: "Points",
	                        focus: true,
	                        showInMinimalView: true
	                    }
	                },
	                name: player.name,
	                code: player.code,
	                oldSubmissions: player.oldSubmissions
	            };
	        });
	    }
	    function runTournament(gamesPerMatchup) {
	        if (gamesPerMatchup == null) {
	            gamesPerMatchup = 1;
	        }
	        if (gamesPerMatchup > 100) {
	            gamesPerMatchup = 100;
	        }
	        else if (gamesPerMatchup < 1) {
	            gamesPerMatchup = 1;
	        }
	        _resetScores();
	        var matchups = _getMatchups();
	        matchups.forEach(function (match) {
	            for (var i = 0; i < gamesPerMatchup; i++) {
	                var engine = (0, engine_1$1.Engine)(AIWrapper(match[player1].code), AIWrapper(match[player2].code));
	                var winner = engine.playGame();
	                var result = winner;
	                for (var playerPiece in match) {
	                    var player = match[playerPiece];
	                    player.played++;
	                    if (result.winner === playerPiece) {
	                        _addScore(player, "win");
	                    }
	                    else if (result.wasGameTimedOut) {
	                        _addScore(player, "timeout");
	                    }
	                    else if (result.winner === "-") {
	                        _addScore(player, "draw");
	                    }
	                    else {
	                        _addScore(player, "loss");
	                    }
	                    if (result.players[playerPiece].madeValidMoves) {
	                        _addScore(player, "validMovesBonus");
	                    }
	                }
	            }
	        });
	        return convertToOutputResultFormat(players);
	    }
	    function _addScore(player, result) {
	        switch (result) {
	            case "draw":
	                player.score += 3;
	                player.draws++;
	                break;
	            case "win":
	                player.score += 4;
	                player.wins++;
	                break;
	            case "timeout":
	                player.score += 1;
	                player.gameTimeouts++;
	                break;
	            case "loss":
	                player.losses++;
	                break;
	            case "validMovesBonus":
	                player.score += 2;
	                player.validlyPlayedGames++;
	                break;
	        }
	    }
	    return publicAPI;
	}
	Competition.CreateNewTournament = CreateNewTournament$1;

	Object.defineProperty(Module$1, "__esModule", { value: true });
	Module$1.Module = void 0;
	const Bots_1$1 = Bots$1;
	const Competition_1 = Competition;
	const engine_1 = engine;
	Module$1.Module = {
	    ModuleID: "NoughtsAndCrosses",
	    LocalTestOpponent: Bots_1$1.Bots.RandomBot,
	    LocalPlayerNames: [
	        "Noughts (O)",
	        "Crosses (X)"
	    ],
	    Instructions: `You are required to implement a JavaScript function that is able to choose a <em>single</em> move in noughts and crosses, given the current board state.
        
You are given the function 'move(board, pieces, turnNumber)' to implement. You do not need to alter this function signature - just write your code inside this function.
            
Your function should return an object of the form:

    {
        row: <number>
        col: <number>
    }
Where &lt;number&gt; is the number of a row or column on the noughts and crosses game board. This represents the location you wish to place your next playing piece.
            
You are provided three parameters (board, pieces, turnNumber) which will be passed in to your function on each turn.
            
board (array):
    board is the current board position, as a 2D Array. Each element may contain an 'X', 'O' or '-' (meaning the space is empty), so an example board could look like this:

    [
        ['-','-','-'],
        ['X','O','-'],
        ['-','-','-']
    ]

pieces (string):
    The pieces you are playing this game. This is a single character - either 'X' or 'O'.
            
turnNumber (number): 
    The current turn number. Each move is a new turn, so if noughts go first, crosses first turn will be turn number two, noughts next turn will be turn three, and so on.
            
NOTES: 
    - Noughts go first in every game in this implementation. 
    - Your function should be able to play as noughts or crosses. 
    - If your code throws an error, your move will be skipped.
    - If your move is invalid, your move will be skipped.
    - The game starts at turn 1.
    - The game will be drawn if 100 moves are made and no winner has been decided.
    - You are able to make as many submissions of your code as you want.
    - Good luck!`,
	    IdePlaceholderCode: `function move(board, pieces, turnNumber) {
    return {
        row: 0,
        col: 0
    };
}`,
	    PlayerAIWrapper: function createPlayerAI(submission) {
	        return function (board, pieces, turnNumber) {
	            return eval(`${submission}; move(board, pieces, turnNumber);`);
	        };
	    },
	    CreateTournament: Competition_1.CreateNewTournament,
	    RequiredPerformanceGamesPerSecond: 10,
	    Engine: engine_1.Engine,
	    EngineFileName: "engine.js"
	};

	var Module = {};

	var Engine = {};

	var TargetControllerAIGenerator$1 = {};

	Object.defineProperty(TargetControllerAIGenerator$1, "__esModule", { value: true });
	TargetControllerAIGenerator$1.TargetControllerAIGenerator = void 0;
	class TargetControllerAIGenerator {
	    constructor(seedTargetInformation) {
	        this._turnsUntilDisappeared = 9; //5;
	        this._AvailableTargets = 0;
	        this._seedTargetInformation = seedTargetInformation;
	    }
	    get AvailableTargets() {
	        return this._AvailableTargets;
	    }
	    Play(targetInformation, turnNumber) {
	        if (turnNumber > 50) {
	            return "GameComplete";
	        }
	        // Find current Alley contents
	        var firstAlley, secondAlley, thirdAlley;
	        var firstAlleyNeedsNew, secondAlleyNeedsNew, thirdAlleyNeedsNew;
	        for (var index = 0; index <= targetInformation.length - 1; index++) {
	            var currentTarget = targetInformation[index];
	            currentTarget.turnsUntilDisappeared--;
	            if (currentTarget.turnsUntilDisappeared > 0) {
	                if (currentTarget.location.col === 0) {
	                    firstAlley = currentTarget;
	                    continue;
	                }
	                else if (currentTarget.location.col === 2) {
	                    secondAlley = currentTarget;
	                    continue;
	                }
	                else if (currentTarget.location.col === 4) {
	                    thirdAlley = currentTarget;
	                    continue;
	                }
	            }
	        }
	        // Find if Alley needs item adding
	        var latestSeedTurnNumber = 0;
	        for (var seedIndex = 0; seedIndex <= this._seedTargetInformation.length - 1; seedIndex++) {
	            var currentSeedInformation = this._seedTargetInformation[seedIndex];
	            latestSeedTurnNumber = currentSeedInformation.turnNumber;
	            if (currentSeedInformation.turnNumber === turnNumber) {
	                for (var colIndex = 0; colIndex <= currentSeedInformation.columns.length - 1; colIndex++) {
	                    if (currentSeedInformation.columns[colIndex] === 0) {
	                        firstAlleyNeedsNew = true;
	                    }
	                    else if (currentSeedInformation.columns[colIndex] === 2) {
	                        secondAlleyNeedsNew = true;
	                    }
	                    else if (currentSeedInformation.columns[colIndex] === 4) {
	                        thirdAlleyNeedsNew = true;
	                    }
	                }
	            }
	        }
	        // Create missing targets
	        if (firstAlley == null && firstAlleyNeedsNew) {
	            firstAlley = this._createTarget(0, this._turnsUntilDisappeared);
	        }
	        if (secondAlley == null && secondAlleyNeedsNew) {
	            secondAlley = this._createTarget(2, this._turnsUntilDisappeared);
	        }
	        if (thirdAlley == null && thirdAlleyNeedsNew) {
	            thirdAlley = this._createTarget(4, this._turnsUntilDisappeared);
	        }
	        // Recreate TargetInfo Array
	        targetInformation = [];
	        if (firstAlley != null) {
	            targetInformation.push(firstAlley);
	        }
	        if (secondAlley != null) {
	            targetInformation.push(secondAlley);
	        }
	        if (thirdAlley != null) {
	            targetInformation.push(thirdAlley);
	        }
	        // Check if the alleys are empty, and there are no remaining targets
	        if (turnNumber > latestSeedTurnNumber && targetInformation.length === 0) {
	            return "GameComplete";
	        }
	        else {
	            return JSON.stringify(targetInformation);
	        }
	    }
	    Reset() {
	        this._AvailableTargets = 0;
	    }
	    _createTarget(column, turns) {
	        this._AvailableTargets++;
	        return {
	            location: {
	                row: 0,
	                col: column
	            },
	            turnsUntilDisappeared: turns
	        };
	    }
	}
	TargetControllerAIGenerator$1.TargetControllerAIGenerator = TargetControllerAIGenerator;

	var TargetHelpers$1 = {};

	var Target$1 = {};

	Object.defineProperty(Target$1, "__esModule", { value: true });
	Target$1.Target = void 0;
	class Target {
	    constructor(location, turnsUntilDisappeared) {
	        this.location = location;
	        this.turnsUntilDisappeared = turnsUntilDisappeared;
	    }
	}
	Target$1.Target = Target;

	var Vector2Helpers$1 = {};

	Object.defineProperty(Vector2Helpers$1, "__esModule", { value: true });
	Vector2Helpers$1.Vector2Helpers = void 0;
	class Vector2Helpers {
	    static Clone(object) {
	        return {
	            row: object.row,
	            col: object.col
	        };
	    }
	    static ArrayClone(object) {
	        return object.map(this.Clone);
	    }
	}
	Vector2Helpers$1.Vector2Helpers = Vector2Helpers;

	Object.defineProperty(TargetHelpers$1, "__esModule", { value: true });
	TargetHelpers$1.TargetHelpers = void 0;
	const Target_1 = Target$1;
	const Vector2Helpers_1$1 = Vector2Helpers$1;
	class TargetHelpers {
	    static Clone(object) {
	        return new Target_1.Target(Vector2Helpers_1$1.Vector2Helpers.Clone(object.location), object.turnsUntilDisappeared);
	    }
	    static ArrayClone(object) {
	        return object.map(this.Clone);
	    }
	}
	TargetHelpers$1.TargetHelpers = TargetHelpers;

	var TargetSeedInformation$1 = {};

	Object.defineProperty(TargetSeedInformation$1, "__esModule", { value: true });
	TargetSeedInformation$1.TargetSeedInformation = void 0;
	class TargetSeedInformation {
	    constructor(turnNumber, columns = []) {
	        this.turnNumber = turnNumber;
	        this.columns = columns;
	    }
	    static get defaultItems() {
	        return this._defaultItems;
	    }
	}
	TargetSeedInformation$1.TargetSeedInformation = TargetSeedInformation;
	TargetSeedInformation._defaultItems = [
	    new TargetSeedInformation(1, [0]),
	    new TargetSeedInformation(3, [2, 4]),
	    new TargetSeedInformation(10, [0]),
	    new TargetSeedInformation(13, [2]),
	    new TargetSeedInformation(18, [4]),
	    new TargetSeedInformation(20, [0]),
	    new TargetSeedInformation(23, [2]),
	    new TargetSeedInformation(32, [4]),
	    new TargetSeedInformation(34, [0, 2]),
	    new TargetSeedInformation(45, [4]),
	    new TargetSeedInformation(47, [2]),
	    new TargetSeedInformation(48, [0])
	];

	Object.defineProperty(Engine, "__esModule", { value: true });
	Engine.CreateNewEngine = void 0;
	const TargetControllerAIGenerator_1 = TargetControllerAIGenerator$1;
	const TargetHelpers_1 = TargetHelpers$1;
	const TargetSeedInformation_1$1 = TargetSeedInformation$1;
	const Vector2Helpers_1 = Vector2Helpers$1;
	function CreateNewEngine(playerAI, unusedAI, outputFunction = console.log.bind(console), logDetailLevel = 0) {
	    var publicAPI = {
	        playTurn: playTurn,
	        playGame: playGame,
	        setSeedInformation: setSeedInformation
	    };
	    const COL_LEFTEDGE = 0;
	    const COL_RIGHTEDGE = 4;
	    const ROW_BACKROW = 3;
	    const ROW_SHOOTINGROW = 2;
	    const POINTS_CAP = 1; //3;
	    let turnNumber = 1;
	    let playerPosition = { row: 3, col: 4 };
	    let targetInformation = [];
	    let playerScore = 0;
	    let playerShots = 0;
	    let playerHits = 0;
	    let playerMisses = 0;
	    let validGame = true;
	    let targetControllerAIGenerator;
	    let seedTargetInformation = TargetSeedInformation_1$1.TargetSeedInformation.defaultItems;
	    function playTurn() {
	        let clonedPlayerPosition = Vector2Helpers_1.Vector2Helpers.Clone(playerPosition);
	        if (targetControllerAIGenerator == null) {
	            targetControllerAIGenerator = new TargetControllerAIGenerator_1.TargetControllerAIGenerator(seedTargetInformation);
	        }
	        let targetControllerResponse = targetControllerAIGenerator.Play(targetInformation, turnNumber);
	        if (targetControllerResponse != null && targetControllerResponse !== "GameComplete") {
	            var parsedTargets = JSON.parse(targetControllerResponse);
	            _setTargets(parsedTargets);
	            let validMove = false;
	            try {
	                let clonedTargetInfo = TargetHelpers_1.TargetHelpers.ArrayClone(targetInformation);
	                let playerAction = playerAI(clonedPlayerPosition, clonedTargetInfo, turnNumber).toUpperCase();
	                _out(`Player has selected command: ${playerAction}.`, 2);
	                validMove = _processPlayerAction(playerAction);
	            }
	            catch (e) {
	                _out(e.toString(), 2);
	            }
	            _viewBoard();
	            validGame = validGame && validMove;
	            turnNumber++;
	        }
	        else {
	            _out("Game over! Score was " + playerScore + "!", 1);
	            return {
	                winner: "",
	                wasGameTimedOut: false,
	                players: {
	                    0: {
	                        madeValidMoves: validGame,
	                        availableTargets: targetControllerAIGenerator.AvailableTargets,
	                        score: playerScore,
	                        shots: playerShots,
	                        hits: playerHits,
	                        misses: playerMisses
	                    }
	                }
	            };
	        }
	    }
	    function playGame() {
	        while (true) {
	            var result = playTurn();
	            if (result != null) {
	                return result;
	            }
	        }
	    }
	    function setSeedInformation(seedInformation) {
	        targetControllerAIGenerator = undefined;
	        seedTargetInformation = seedInformation;
	    }
	    function _out(text, detailLevel) {
	        if (detailLevel <= logDetailLevel) {
	            outputFunction(text);
	        }
	    }
	    function _setTargets(newTargets) {
	        targetInformation = newTargets;
	    }
	    function _isLocationAccessibleToPlayer(location) {
	        return location.col >= COL_LEFTEDGE &&
	            location.col <= COL_RIGHTEDGE &&
	            (location.row === ROW_BACKROW ||
	                (location.row === ROW_SHOOTINGROW &&
	                    location.col % 2 === 0));
	    }
	    function _move(newLocation) {
	        if (_isLocationAccessibleToPlayer(newLocation)) {
	            playerPosition = newLocation;
	            return true;
	        }
	        return false;
	    }
	    function _getTargetIndexInRangeOfPlayer() {
	        return targetInformation.findIndex(target => target.location.col === playerPosition.col && playerPosition.row === ROW_SHOOTINGROW);
	    }
	    function _fire() {
	        let targetIndex = _getTargetIndexInRangeOfPlayer();
	        playerShots++;
	        if (targetIndex >= 0) {
	            _hitTarget(targetIndex);
	            playerHits++;
	            return true;
	        }
	        playerMisses++;
	        return false;
	    }
	    function _hitTarget(targetIndex) {
	        let target = targetInformation[targetIndex];
	        if (target.turnsUntilDisappeared > POINTS_CAP) {
	            playerScore += POINTS_CAP;
	        }
	        else {
	            playerScore += target.turnsUntilDisappeared;
	        }
	        targetInformation.splice(targetIndex, 1);
	    }
	    function _processPlayerAction(instruction) {
	        switch (instruction) {
	            case "NORTH":
	                return _move({
	                    row: playerPosition.row - 1,
	                    col: playerPosition.col
	                });
	            case "EAST":
	                return _move({
	                    row: playerPosition.row,
	                    col: playerPosition.col + 1
	                });
	            case "SOUTH":
	                return _move({
	                    row: playerPosition.row + 1,
	                    col: playerPosition.col
	                });
	            case "WEST":
	                return _move({
	                    row: playerPosition.row,
	                    col: playerPosition.col - 1
	                });
	            case "FIRE": //TODO: Possibly force to specify which direction you want to fire?
	                return _fire();
	            case "PASS":
	                return true;
	            default:
	                return false;
	        }
	    }
	    function _viewBoard() {
	        var firstAlley = _getMovesRemainingByCoordinate(0);
	        var leftMiddleAlley = " ";
	        var secondAlley = _getMovesRemainingByCoordinate(2);
	        var rightMiddleAlley = " ";
	        var thirdAlley = _getMovesRemainingByCoordinate(4);
	        _out("|" + firstAlley + "   " + secondAlley + "   " + thirdAlley + "|", 2);
	        _out("|_   _   _|", 2);
	        firstAlley = playerPosition.col === 0 ? "X" : " ";
	        leftMiddleAlley = playerPosition.col === 1 ? "X" : " ";
	        secondAlley = playerPosition.col === 2 ? "X" : " ";
	        rightMiddleAlley = playerPosition.col === 3 ? "X" : " ";
	        thirdAlley = playerPosition.col === 4 ? "X" : " ";
	        if (playerPosition.row === ROW_SHOOTINGROW) {
	            _out("|" + firstAlley + "|_|" + secondAlley + "|_|" + thirdAlley + "|", 2);
	            _out("|         |", 2);
	        }
	        else if (playerPosition.row === ROW_BACKROW) {
	            _out("| |_| |_| |", 2);
	            _out("|" + firstAlley + " " + leftMiddleAlley + " " + secondAlley + " " + rightMiddleAlley + " " + thirdAlley + "|", 2);
	        }
	        _out("Score: " + playerScore, 2);
	        _out("", 2);
	    }
	    function _getMovesRemainingByCoordinate(location) {
	        var output = " ";
	        for (var i = 0; i <= targetInformation.length - 1; i++) {
	            var currentTarget = targetInformation[i];
	            if (currentTarget.location.col === location) {
	                output = currentTarget.turnsUntilDisappeared.toString();
	                break;
	            }
	        }
	        return output;
	    }
	    return publicAPI;
	}
	Engine.CreateNewEngine = CreateNewEngine;

	var Tournament = {};

	var Bots = {};

	Object.defineProperty(Bots, "__esModule", { value: true });
	Bots.Bots = void 0;
	Bots.Bots = {
	    "RandomBot": `function play(location, targetInformation, turnNumber) {
    return ["NORTH", "EAST", "SOUTH", "WEST", "FIRE"][Math.floor(Math.random() * 5)];
}`,
	    "PassBot": `function play(location, targetInformation, turnNumber) {
        return "PASS";
    }`,
	    "OpportunityBot": `function play(location, targetInformation, turnNumber) {
    if (location.row === 3) {
        if (location.col % 2 === 0) { 
            return "NORTH";
        } else {
            return "LEFT";
        }
    } else if (targetInformation.find(item=> item.location.col === location.col)) {
        return "FIRE";
    } else {
        return "PASS";
    }
}`
	};

	var Player$1 = {};

	Object.defineProperty(Player$1, "__esModule", { value: true });
	Player$1.Player = void 0;
	class Player {
	    constructor(name) {
	        this.availableTargets = 0;
	        this.hits = 0;
	        this.misses = 0;
	        this.name = name;
	        this.oldSubmissions = [];
	        this.played = 0;
	        this.score = 0;
	        this.shots = 0;
	        this.validGames = 0;
	    }
	}
	Player$1.Player = Player;

	var TargetSeedInformationGenerator$1 = {};

	Object.defineProperty(TargetSeedInformationGenerator$1, "__esModule", { value: true });
	TargetSeedInformationGenerator$1.TargetSeedInformationGenerator = void 0;
	const TargetSeedInformation_1 = TargetSeedInformation$1;
	class TargetSeedInformationGenerator {
	    constructor(maxTurns, minWaitBetweenTurns, maxWaitBetweenTurns) {
	        this._turnsUntilDisappeared = 9; //5;
	        this._maxTurns = maxTurns;
	        this._minWaitBetweenTurns = minWaitBetweenTurns;
	        this._maxWaitBetweenTurns = maxWaitBetweenTurns;
	    }
	    GetSeedInformation() {
	        var seedInformation = [];
	        // Generate for each column
	        var firstAlleySeedInformation = this._getSeedInformation(0);
	        var secondAlleySeedInformation = this._getSeedInformation(2);
	        var thirdAlleySeedInformation = this._getSeedInformation(4);
	        // Union them together on the turnNumber
	        var firstAlleyIndex = 0;
	        var secondAlleyIndex = 0;
	        var thirdAlleyIndex = 0;
	        var turnNumber = 1;
	        while ((firstAlleyIndex <= firstAlleySeedInformation.length - 1) ||
	            (secondAlleyIndex <= secondAlleySeedInformation.length - 1) ||
	            (thirdAlleyIndex <= thirdAlleySeedInformation.length - 1)) {
	            var targetSeedInformation = new TargetSeedInformation_1.TargetSeedInformation(turnNumber);
	            if (this._doesAlleyNeedTargetForTurnNumber(firstAlleyIndex, firstAlleySeedInformation, turnNumber)) {
	                targetSeedInformation.columns.push(0);
	                firstAlleyIndex++;
	            }
	            if (this._doesAlleyNeedTargetForTurnNumber(secondAlleyIndex, secondAlleySeedInformation, turnNumber)) {
	                targetSeedInformation.columns.push(2);
	                secondAlleyIndex++;
	            }
	            if (this._doesAlleyNeedTargetForTurnNumber(thirdAlleyIndex, thirdAlleySeedInformation, turnNumber)) {
	                targetSeedInformation.columns.push(4);
	                thirdAlleyIndex++;
	            }
	            if (targetSeedInformation.columns.length > 0) {
	                seedInformation.push(targetSeedInformation);
	            }
	            turnNumber++;
	        }
	        return seedInformation;
	    }
	    _doesAlleyNeedTargetForTurnNumber(alleyIndex, alleyInformation, turnNumber) {
	        if (alleyIndex <= alleyInformation.length - 1) {
	            var currentFirstAlleyTargetInformation = alleyInformation[alleyIndex];
	            if (currentFirstAlleyTargetInformation.turnNumber === turnNumber) {
	                return true;
	            }
	        }
	        return false;
	    }
	    _getSeedInformation(column) {
	        var seedInformation = [];
	        var turnNumber = 1;
	        do {
	            // Pad a wait
	            turnNumber += this._getRandomWait();
	            // Add Target
	            seedInformation.push(new TargetSeedInformation_1.TargetSeedInformation(turnNumber, [column]));
	            turnNumber += this._turnsUntilDisappeared; // consider using another random number here to allow extra targets to appear if shot quickly
	        } while (turnNumber <= this._maxTurns);
	        return seedInformation;
	    }
	    _getRandomWait() {
	        return Math.floor(Math.random() * Math.floor(this._maxWaitBetweenTurns - this._minWaitBetweenTurns)) + this._minWaitBetweenTurns;
	    }
	}
	TargetSeedInformationGenerator$1.TargetSeedInformationGenerator = TargetSeedInformationGenerator;

	Object.defineProperty(Tournament, "__esModule", { value: true });
	Tournament.CreateNewTournament = void 0;
	const Bots_1 = Bots;
	const Engine_1$1 = Engine;
	const Player_1 = Player$1;
	const TargetSeedInformationGenerator_1 = TargetSeedInformationGenerator$1;
	function CreateNewTournament() {
	    var publicAPI = {
	        addPlayer: addPlayer,
	        submitPlayerCode: submitPlayerCode,
	        runTournament: runTournament
	    };
	    const MIN_GAMES = 1;
	    const MAX_GAMES = 100;
	    const PLAYER_INDEX = 0;
	    const INVALID_GAME_SCORE_PENALTY = 3;
	    let players = [];
	    _addBots();
	    function addPlayer(name) {
	        if (_findPlayerByName(name) == null) {
	            players.push(new Player_1.Player(name));
	        }
	        return name;
	    }
	    function submitPlayerCode(name, code) {
	        let player = _findPlayerByName(name);
	        if (player != null) {
	            if (player.code != null) {
	                player.oldSubmissions.push(player.code);
	            }
	            player.code = code;
	        }
	        else {
	            name = addPlayer(name);
	            submitPlayerCode(name, code);
	        }
	        return name;
	    }
	    function runTournament(gamesPerMatchup) {
	        if (gamesPerMatchup == null) {
	            gamesPerMatchup = MIN_GAMES;
	        }
	        if (gamesPerMatchup > MAX_GAMES) {
	            gamesPerMatchup = MAX_GAMES;
	        }
	        else if (gamesPerMatchup < MIN_GAMES) {
	            gamesPerMatchup = MIN_GAMES;
	        }
	        _resetScores();
	        let playersWithCode = _findPlayersWithCode() || [];
	        let targetSeedInformationGenerator = new TargetSeedInformationGenerator_1.TargetSeedInformationGenerator(50, 5, 15);
	        let targetSeedInformation = targetSeedInformationGenerator.GetSeedInformation();
	        playersWithCode.forEach(function (player) {
	            for (var i = 0; i < gamesPerMatchup; i++) {
	                var engine = (0, Engine_1$1.CreateNewEngine)(_aiWrapper(player.code ?? ""), _aiWrapper(""));
	                engine.setSeedInformation(targetSeedInformation);
	                var result = engine.playGame();
	                var playerResult = result.players[PLAYER_INDEX];
	                player.played++;
	                player.availableTargets += playerResult.availableTargets;
	                player.score += playerResult.score;
	                player.shots += playerResult.shots;
	                player.hits += playerResult.hits;
	                player.misses += playerResult.misses;
	                if (playerResult.madeValidMoves) {
	                    player.validGames++;
	                }
	                else {
	                    player.score -= INVALID_GAME_SCORE_PENALTY;
	                }
	            }
	        });
	        return _convertToOutputResultFormat(players);
	    }
	    function _addBots() {
	        for (var botName in Bots_1.Bots) {
	            submitPlayerCode(botName, Bots_1.Bots[botName]);
	        }
	    }
	    function _aiWrapper(submission) {
	        return function (location, targetLocations, turnNumber) {
	            return eval(`${submission}; play(location, targetLocations, turnNumber);`);
	        };
	    }
	    function _convertToOutputResultFormat(players) {
	        return players.map((player) => {
	            return {
	                results: {
	                    "played": {
	                        value: player.played,
	                        order: 0,
	                        heading: "Played",
	                        focus: true,
	                        showInMinimalView: false
	                    },
	                    "availableTargets": {
	                        value: player.availableTargets,
	                        order: 1,
	                        heading: "Available Targets",
	                        focus: true,
	                        showInMinimalView: false
	                    },
	                    "shots": {
	                        value: player.shots,
	                        order: 2,
	                        heading: "Shots",
	                        focus: false,
	                        color: "grey",
	                        showInMinimalView: false
	                    },
	                    "hits": {
	                        value: player.hits,
	                        order: 3,
	                        heading: "Hits",
	                        focus: false,
	                        color: "green",
	                        showInMinimalView: true
	                    },
	                    "misses": {
	                        value: player.misses,
	                        order: 4,
	                        heading: "Misses",
	                        focus: false,
	                        color: "red",
	                        showInMinimalView: false
	                    },
	                    "validGames": {
	                        value: player.validGames,
	                        order: 5,
	                        heading: "Valid Games",
	                        focus: false,
	                        color: "purple",
	                        showInMinimalView: false
	                    },
	                    "score": {
	                        value: player.score,
	                        order: 6,
	                        heading: "Points",
	                        focus: true,
	                        showInMinimalView: true
	                    }
	                },
	                name: player.name,
	                code: player.code ?? "",
	                oldSubmissions: player.oldSubmissions
	            };
	        });
	    }
	    function _findPlayerByName(name) {
	        return players.find(function (player) {
	            return player.name == name;
	        });
	    }
	    function _findPlayersWithCode() {
	        return players.filter(function (player) {
	            return player.code != null;
	        });
	    }
	    function _resetScores() {
	        players.forEach(function (player) {
	            player.availableTargets = 0;
	            player.shots = 0;
	            player.hits = 0;
	            player.misses = 0;
	            player.validGames = 0;
	            player.score = 0;
	            player.played = 0;
	        });
	    }
	    return publicAPI;
	}
	Tournament.CreateNewTournament = CreateNewTournament;

	Object.defineProperty(Module, "__esModule", { value: true });
	Module.Module = void 0;
	const Engine_1 = Engine;
	const Tournament_1 = Tournament;
	Module.Module = {
	    ModuleID: "ShootingRange",
	    LocalTestOpponent: ``,
	    LocalPlayerNames: [],
	    Instructions: `# Introduction
You are required to implement a JavaScript function that is able to choose a _single_ move in the game ShootingRange, given the current game state.

ShootingRange is a fairground style game where an AI Bot is moved side to side in a grid aiming to shoot targets that appear randomly within three alleyways. The game grid is split between an area where the AI bot can traverse, and the area where the targets appear.

The total game area is a grid of 5 x 4 cells, running from (0,0) in the top-left to (4,3) in the bottom right. The targets appear in cells (row: 0, col: 0), (row: 0, col: 2), and (row: 0, col: 4), and the player moves along (row: 3) and can move up into firing positions (row: 2, col: 0), (row: 2, col: 2) and (row: 2, col: 4).

When playing a local test game (explained more below) the board will be displayed like this:

\`\`\`
        0 1 2 3 4
    
0   |1       3|
1   |_   _   _|
2   | |_| |_| |
3   |        X|
\`\`\`

In this visualisation, cells are separated from one another by the "|" character. You can see the location of the player from the position of the X character. The locations of Targets are displayed using the number of moves they remain before disappearing (i.e. 5 means it will be there for 5 more moves, 2 means two more moves etc). 

Targets will appear in the different alleyways randomly and will disappear after **9** turns or when they are successfully shot by the AI bot. The pattern to which they appear is randomised every tournament, but all AI bots play the same pattern as each other. The test game is **NOT** randomised, however.

In the game, points are awarded for shooting targets, and deducted slightly if an invalid move was made at any time in the game. Highest score wins!

Every turn, each bot can take *one* action, chosen by returning a single string from the function containing their code. The action the bot takes can be: "NORTH", "EAST", "SOUTH", "WEST", "FIRE" or "PASS".

NORTH, EAST, SOUTH and WEST cause the bot to attempt to move in the corresponding direction (Up, right, down, left). 

FIRE will shoot a target if the bot is positioned in the firing position that shares the same column as the target. For example if there is a target in (row: 0, col: 0), the play must be in (row: 2, col: 0) for the shot to hit the target. (Note: Simply being in the correct column is not enough, the bot needs to be in the firing position (row: 2) too!).

Bots can choose to PASS if they do not want to take an action on the turn. This is considered a valid move (See scoring for further information).


# The Function
You are given the function 'play(location, targetInformation, turnNumber)' to implement. You do not need to alter this function signature - just write your code inside this function.

Your function should always return one of the actions listed above, as a string. Returning any other value is invalid, as is returning an action which cannot be carried out in the current game state (ie, "EAST" when you are at the edge of the grid, or "FIRE" when you are not in a firing position corresponding to a target.)

Your function is passed three parameters (location, targetInformation, turnNumber), and will be called each time it is your bot's turn to play.

## location (object) : 

location is an object of the form:

\`\`\`
{
    row: <number>
    col: <number>
}
\`\`\`

It indicates the current position of your bot on the grid. 

## targetInformation (array) :

targetInformation is an array of objects, of the form:

\`\`\`
{
    location: {
        row: <number>, 
        col: <number>}
    },
    turnsUntilDisappeared: <number>
}
\`\`\`

Each object in the array represents a target in the range, and has the location of the target, as well as the amount of turns remaining before the target will disappear.

In the event that there are no targets to display for the given turn, the targetInformation will be an empty array (have a length of zero).

## turnNumber (number) :

The current turnNumber. This starts at 1, and will increment each time your function is invoked.



# Scoring
Your bot will play in a tournament against the other team's bots. It will be scored based on performance. 

- Hitting a target will earn you a point.
- Playing any invalid moves in the game marks that game as an invalid game, and will subtract 3 points from your score. **You have been warned**!

When you have a working bot, click "Submit Code" to send the current version to the server to compete in this tournament. You can submit your code as many times as you desire during the allowed time for the task.

The tournament will play your latest code, and scoring does not stack between tournaments so keep improving your code and your bots performance to win.



# Local Test Games
You are able to test out your bot without submitting it by using the test game in the bottom-right of the development environment. Here you can see how your bot behaves in a game.



# Notes: 
- If your code throws an error, your move will be skipped.
- If your move is invalid, your move will be skipped.
- The game ends when there are no more targets remaining or scheduled to appear, or there have been 50 turns; whichever happens first.
- You are able to make as many submissions of your code as you want - each submission is stored for discussion later and we love to see how your solution progressed!
- When running a test game, calling console.log() with a string argument will cause the string you pass to appear as part of the output in the bottom right.
- Feel free to create as many other functions as you feel is helpful, just make sure you keep the signature of the main "play" function exactly as it is!

**Good luck!**`,
	    IdePlaceholderCode: `function play(location, targetInformation, turnNumber) {
    return "EAST";
}`,
	    PlayerAIWrapper: function createPlayerAI(submission) {
	        return function (location, targetInformation, turnNumber) {
	            return eval(`${submission}; play(location, targetInformation, turnNumber);`);
	        };
	    },
	    CreateTournament: Tournament_1.CreateNewTournament,
	    RequiredPerformanceGamesPerSecond: 10,
	    Engine: Engine_1.CreateNewEngine,
	    EngineFileName: "engine.js"
	};

	Object.defineProperty(GameModuleRepository$1, "__esModule", { value: true });
	GameModuleRepository$1.GameModuleRepository = void 0;
	const ModuleType_1 = ModuleType;
	const Module_1 = Module$2;
	const Module_2 = Module$1;
	const Module_3 = Module;
	class GameModuleRepository {
	    GetGameModule(gameModuleType) {
	        switch (gameModuleType) {
	            case ModuleType_1.ModuleType.FruitBots:
	                return Module_1.Module;
	            case ModuleType_1.ModuleType.ShootingRange:
	                return Module_3.Module;
	            case ModuleType_1.ModuleType.NoughtsAndCrosses:
	            default:
	                return Module_2.Module;
	        }
	    }
	}
	GameModuleRepository$1.GameModuleRepository = GameModuleRepository;

	(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ModuleType = exports.GameModuleRepository = void 0;
	const GameModuleRepository_1 = GameModuleRepository$1;
	Object.defineProperty(exports, "GameModuleRepository", { enumerable: true, get: function () { return GameModuleRepository_1.GameModuleRepository; } });
	const ModuleType_1 = ModuleType;
	Object.defineProperty(exports, "ModuleType", { enumerable: true, get: function () { return ModuleType_1.ModuleType; } });

	}(build));

	var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	Object.defineProperty(GameModuleHelper$1, "__esModule", { value: true });
	GameModuleHelper$1.GameModuleHelper = void 0;
	const assessmentcentre_api_client_1$1 = build$1;
	const assessmentcentre_game_modules_1 = build;
	class GameModuleHelper {
	    GetActiveGameModuleAsync() {
	        return __awaiter$1(this, void 0, void 0, function* () {
	            let assessmentCentreInfo = yield new assessmentcentre_api_client_1$1.AssessmentCentreClient().getAsync();
	            return new assessmentcentre_game_modules_1.GameModuleRepository().GetGameModule(assessmentCentreInfo.ModuleType);
	        });
	    }
	}
	GameModuleHelper$1.GameModuleHelper = GameModuleHelper;

	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	Object.defineProperty(client, "__esModule", { value: true });
	const liveScores_1 = liveScores;
	const assessmentcentre_api_client_1 = build$1;
	const ideTimer_1 = ideTimer;
	const settingsMenu_1 = settingsMenu;
	const themeSelector_1 = themeSelector;
	const settings_1 = settings;
	const Instructions_1 = Instructions$1;
	const GameModuleHelper_1 = GameModuleHelper$1;
	const CORE_SERVICE_DOMAIN = "https://pinewood-assessment-center-core.azurewebsites.net"; //This is a placeholder, replaced in-file using string.replace during server initialisation, before runtime
	assessmentcentre_api_client_1.ClientConfiguration.BaseURL = CORE_SERVICE_DOMAIN.startsWith("http") ? CORE_SERVICE_DOMAIN : `http://${CORE_SERVICE_DOMAIN}`;
	let editor;
	let session;
	let doc;
	let queryParams = new URLSearchParams(window.location.search);
	let applicantName = queryParams.get('name');
	let groupName = queryParams.get('group');
	let socket;
	let isSpectator = queryParams.get('spectator') != null;
	let singleDriver = queryParams.get('sd') === "1";
	document.addEventListener("DOMContentLoaded", function preInit() {
	    return __awaiter(this, void 0, void 0, function* () {
	        const urlParameters = new URLSearchParams(location.search);
	        for (var [key, value] of urlParameters) {
	            if (key == "sd") {
	                let singleDriver = document.getElementById("sd");
	                if (singleDriver) {
	                    singleDriver.value = value;
	                }
	            }
	        }
	        let gameModule = yield new GameModuleHelper_1.GameModuleHelper().GetActiveGameModuleAsync();
	        if (isIDEPage()) {
	            initialise(gameModule.Engine, gameModule.IdePlaceholderCode, gameModule.PlayerAIWrapper(gameModule.LocalTestOpponent), gameModule.PlayerAIWrapper, gameModule.LocalPlayerNames);
	        }
	        else {
	            new settings_1.Settings().initialise();
	            new Instructions_1.Instructions().initialise();
	            if (document.getElementById("results") != null) {
	                let allowCodeViewing = isAdminResultsPage();
	                (0, liveScores_1.initialiseLiveScores)(allowCodeViewing, false);
	            }
	        }
	        (0, themeSelector_1.initialiseThemeToggle)(editor, true);
	    });
	});
	function isIDEPage() {
	    return document.getElementById("console") != null; // TODO: This is a bit brittle and could do with being made more solid, but will do for now.
	}
	function isAdminResultsPage() {
	    return document.getElementById("settingsWindow") != null;
	}
	function initialise(gameEngine, placeholderCode, localOpponentAI, playerAIFactory, localPlayerNames) {
	    function setWarningOnCloseTab() {
	        window.addEventListener('beforeunload', (event) => {
	            // Cancel the event as stated by the standard.
	            event.preventDefault();
	            // Chrome requires returnValue to be set.
	            event.returnValue = '';
	        });
	    }
	    if (applicantName === "null" || groupName === "null" || applicantName == null || groupName == null || applicantName === "" || groupName === "") {
	        window.location.replace(`/`);
	    }
	    else {
	        let groupNameReadonly = document.getElementById('groupNameReadonly');
	        if (!isSpectator) {
	            groupNameReadonly.innerText = groupName;
	        }
	        else {
	            let groupDropDown = document.getElementById('group');
	            groupDropDown.value = groupName;
	            groupNameReadonly.classList.toggle("hidden");
	            groupDropDown.classList.toggle("hidden");
	        }
	        initialiseEditor(placeholderCode);
	        initialiseLocalTestGame(localOpponentAI, gameEngine, playerAIFactory, localPlayerNames);
	        if (!isSpectator) {
	            initialiseCodeSubmit();
	        }
	        (0, settingsMenu_1.initialiseSettingsMenuToggle)();
	        (0, ideTimer_1.startIDECountdownTimer)();
	        initialiseCollaboration();
	        initialiseFontSizeControl();
	        if (!isSpectator) {
	            setWarningOnCloseTab();
	        }
	        if (isSpectator) {
	            initialiseGroupSwitcher();
	        }
	        (0, liveScores_1.initialiseLiveScores)(false, true, groupName);
	    }
	}
	function initialiseEditor(initialEditorText) {
	    editor = ace.edit("editor");
	    session = editor.getSession();
	    doc = session.getDocument();
	    editor.setTheme("ace/theme/monokai");
	    editor.session.setMode("ace/mode/javascript");
	    editor.setOptions({
	        enableBasicAutocompletion: true
	    });
	    editor.setValue(initialEditorText, 1);
	    if (isSpectator) {
	        editor.setReadOnly(true);
	    }
	}
	function initialiseFontSizeControl() {
	    var availableSizes = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];
	    var currentSizeIndex = 1; //default is 12px;
	    function _updateEditorFontSize() {
	        _restrictSelectedIndexRange();
	        editor.setOptions({
	            fontSize: _getSizeWithUnits()
	        });
	    }
	    function _getSizeWithUnits() {
	        return `${availableSizes[currentSizeIndex]}px`;
	    }
	    function _restrictSelectedIndexRange() {
	        if (currentSizeIndex < 0) {
	            currentSizeIndex = 0;
	        }
	        if (currentSizeIndex >= availableSizes.length) {
	            currentSizeIndex = availableSizes.length - 1;
	        }
	    }
	    function increaseSize() {
	        currentSizeIndex++;
	        _updateEditorFontSize();
	    }
	    function decreaseSize() {
	        currentSizeIndex--;
	        _updateEditorFontSize();
	    }
	    document.getElementById("increaseFontSize").addEventListener("click", increaseSize);
	    document.getElementById("decreaseFontSize").addEventListener("click", decreaseSize);
	}
	function initialiseCodeSubmit() {
	    function submitCode() {
	        doesCodeTerminate(function ifCodeTerminatesCallback() {
	            if (confirm("Are you sure you want to submit your code? (You are allowed multiple submissions)")) {
	                var submission = editor.getValue();
	                (() => __awaiter(this, void 0, void 0, function* () {
	                    let response = yield new assessmentcentre_api_client_1.CodeSubmissionClient().postAsync({ GroupName: groupName, Code: submission });
	                    groupName = response.GroupName;
	                }))();
	            }
	        }, function ifCodeDoesNotTerminateCallback() {
	            alert("Your code failed validation - there may be an infinite loop.");
	        });
	    }
	    document.getElementById("submit").addEventListener("click", submitCode);
	}
	function doesCodeTerminate(safeCallback, unsafeCallback) {
	    var data = {
	        GroupName: groupName,
	        Code: editor.getValue()
	    };
	    (() => __awaiter(this, void 0, void 0, function* () {
	        let response = yield new assessmentcentre_api_client_1.CodeVerificationClient().postAsync(data);
	        response.Success ? safeCallback() : unsafeCallback();
	    }))();
	}
	function writeToOutput(text) {
	    var element = document.createElement('span');
	    element.textContent = text;
	    let consoleDiv = document.getElementById("console");
	    consoleDiv.innerHTML += element.innerHTML + "<br />";
	    consoleDiv.scrollTop = consoleDiv.scrollHeight;
	}
	function initialiseLocalTestGame(demoAI, GameEngine, playerAIFactory, localPlayerNames) {
	    let currentGame;
	    function runLocalGame() {
	        doesCodeTerminate(function ifCodeTerminatesCallback() {
	            if (socket != null) {
	                socket.send(JSON.stringify({ type: "newLocalGame" }));
	            }
	            document.getElementById("console").innerHTML = "";
	            document.getElementById("next").disabled = false;
	            var playerAIFunction = playerAIFactory(editor.getValue());
	            var playFirst = document.querySelector('input[name="firstOrSecond"]:checked').value === "first";
	            if (playFirst) {
	                currentGame = GameEngine(playerAIFunction, demoAI, writeAndSend, 3);
	            }
	            else {
	                currentGame = GameEngine(demoAI, playerAIFunction, writeAndSend, 3);
	            }
	            currentGame.playTurn();
	        }, function ifCodeDoesNotTerminateCallback() {
	            alert("Your code failed validation - there may be an infinite loop.");
	        });
	    }
	    function playNextTurn() {
	        if (currentGame != null && currentGame.playTurn() != null) {
	            stopGame();
	        }
	    }
	    function stopGame() {
	        currentGame = null;
	        document.getElementById("next").disabled = true;
	    }
	    function writeAndSend(text) {
	        writeToOutput(text);
	        if (socket != null) {
	            socket.send(JSON.stringify({ type: "localGameTurn", text: text }));
	        }
	    }
	    console.log = (text) => {
	        writeAndSend(`[CONSOLE]: ${text}`);
	    };
	    document.getElementById("run").addEventListener("click", runLocalGame);
	    document.getElementById("next").addEventListener("click", playNextTurn);
	    if (localPlayerNames.length === 2) {
	        document.getElementById("playFirstSpan").innerText = localPlayerNames[0];
	        document.getElementById("playSecondSpan").innerText = localPlayerNames[1];
	    }
	    else {
	        document.getElementById("playAsLabel").style.display = "none";
	        document.getElementById("playFirstLabel").style.display = "none";
	        document.getElementById("playSecondLabel").style.display = "none";
	    }
	    document.addEventListener("DOMContentLoaded", stopGame);
	}
	// TODO: Move these two types into interfaces?
	var Cursors;
	var Selections;
	function initialiseCollaboration() {
	    var colorAllocator = function () {
	        var collaboratorColors = {};
	        var totalColoursGivenOut = 0;
	        var availableColours = [
	            "#BB0000",
	            "#00BB00",
	            "#008080",
	            "#CC5500",
	            "#0000BB",
	            "#6a0dad",
	            "#999999",
	        ];
	        var publicAPI = {
	            getColorFor: getColorFor
	        };
	        function getColorFor(collaboratorId) {
	            if (collaboratorColors[collaboratorId] == null) {
	                collaboratorColors[collaboratorId] = availableColours[totalColoursGivenOut++];
	            }
	            return collaboratorColors[collaboratorId];
	        }
	        return publicAPI;
	    }();
	    function createCursorManager() {
	        var publicAPI = {
	            handleCursorUpdate: handleCursorUpdate,
	            remove: remove,
	            removeAll: removeAll
	        };
	        var cursorManager = new AceCollabExt.AceMultiCursorManager(editor.getSession());
	        var cursors = {};
	        (function _init() {
	            _setLocalCursor();
	            editor.getSession().selection.on('changeCursor', () => _setLocalCursor());
	        })();
	        function handleCursorUpdate(parsedMessage) {
	            if (cursors[parsedMessage.id] == null) {
	                _addCursor(parsedMessage.id, parsedMessage.owner, parsedMessage.position);
	            }
	            else {
	                _moveCursor(parsedMessage.id, parsedMessage.position);
	            }
	        }
	        function remove(cursorUID) {
	            if (cursors[cursorUID] != null) {
	                delete cursors[cursorUID];
	                cursorManager.removeCursor(cursorUID);
	            }
	        }
	        function removeAll() {
	            for (var cursorUID in cursors) {
	                delete cursors[cursorUID];
	                cursorManager.removeCursor(cursorUID);
	            }
	        }
	        function _setLocalCursor() {
	            if (!isSpectator) {
	                var position = editor.getCursorPosition();
	                socket.send(JSON.stringify({ type: "cursor", owner: applicantName, position: position }));
	            }
	        }
	        function _addCursor(id, applicantName, position) {
	            cursors[id] = { color: colorAllocator.getColorFor(id) };
	            cursorManager.addCursor(id, applicantName, cursors[id].color, position);
	        }
	        function _moveCursor(id, position) {
	            cursorManager.setCursor(id, position);
	        }
	        return publicAPI;
	    }
	    function createSelectionManager() {
	        var publicAPI = {
	            handleSelectionUpdate: handleSelectionUpdate,
	            remove: remove,
	            removeAll: removeAll
	        };
	        var AceRange = ace.require("ace/range").Range;
	        var selectionManager = new AceCollabExt.AceMultiSelectionManager(editor.getSession());
	        var selections = {};
	        (function init() {
	            _setLocalSelection();
	            session.selection.on('changeSelection', () => _setLocalSelection());
	            session.selection.on('clearSelection', () => _setLocalSelection());
	        })();
	        function handleSelectionUpdate(parsedMessage) {
	            if (parsedMessage.clear && selections[parsedMessage.id] != null) {
	                _clearSelection(parsedMessage.id);
	            }
	            else {
	                if (selections[parsedMessage.id] == null) {
	                    _addSelection(parsedMessage.id, parsedMessage.owner, parsedMessage.ranges);
	                }
	                else {
	                    _modifySelection(parsedMessage.id, parsedMessage.ranges);
	                }
	            }
	        }
	        function remove(selectionUID) {
	            if (selections[selectionUID] != null) {
	                delete selections[selectionUID];
	                selectionManager.removeSelection(selectionUID);
	            }
	        }
	        function removeAll() {
	            for (var selectionUID in selections) {
	                delete selections[selectionUID];
	                selectionManager.removeSelection(selectionUID);
	            }
	        }
	        function _setLocalSelection() {
	            if (!isSpectator) {
	                if (!editor.selection.isEmpty()) {
	                    var ranges = editor.selection.getAllRanges();
	                    socket.send(JSON.stringify({ type: "selection", owner: name, ranges: ranges }));
	                }
	                else {
	                    socket.send(JSON.stringify({ type: "selection", owner: name, clear: true }));
	                }
	            }
	        }
	        function _addSelection(id, applicantName, ranges) {
	            if (ranges != null) { // don't try to add an empty selection (sent when cursor moves, still counts as a selection edit in case it's removing an existing selection)
	                var aceRanges = ranges.map(range => new AceRange(range.start.row, range.start.column, range.end.row, range.end.column));
	                selections[id] = { color: colorAllocator.getColorFor(id) };
	                selectionManager.addSelection(id, applicantName, selections[id].color, aceRanges);
	            }
	        }
	        function _modifySelection(id, ranges) {
	            var aceRanges = ranges.map(range => new AceRange(range.start.row, range.start.column, range.end.row, range.end.column));
	            selectionManager.setSelection(id, aceRanges);
	        }
	        function _clearSelection(id) {
	            selectionManager.clearSelection(id);
	        }
	        return publicAPI;
	    }
	    var suppressEvents = false;
	    var isActiveDriver = singleDriver === false;
	    function getWebSocketUri() {
	        let webSocketUrl = "";
	        if (CORE_SERVICE_DOMAIN.startsWith("https://")) {
	            webSocketUrl = CORE_SERVICE_DOMAIN.replace("https://", "wss://");
	        }
	        else if (CORE_SERVICE_DOMAIN.startsWith("http://")) {
	            webSocketUrl = CORE_SERVICE_DOMAIN.replace("http://", "ws://");
	        }
	        else {
	            webSocketUrl = `ws://${CORE_SERVICE_DOMAIN}`;
	        }
	        return `${webSocketUrl}/mob`;
	    }
	    document.getElementById("driver-info").innerText = applicantName;
	    if (socket != null) {
	        socket.close();
	    }
	    socket = new WebSocket(getWebSocketUri());
	    socket.addEventListener('open', function (event) {
	        Cursors = createCursorManager();
	        Selections = createSelectionManager();
	        socket.send(JSON.stringify({ type: "join", teamName: groupName, name: applicantName, isSpectator: isSpectator }));
	        socket.addEventListener('message', function (message) {
	            var parsedMessage = JSON.parse(message.data);
	            switch (parsedMessage.type) {
	                case "driverChange":
	                    if (singleDriver) {
	                        var infoElement = document.getElementById("driver-info");
	                        isActiveDriver = parsedMessage.player.name === applicantName;
	                        isActiveDriver ? infoElement.classList.add("activeDriver") : infoElement.classList.remove("activeDriver");
	                        document.getElementById("run").disabled = !isActiveDriver;
	                        editor.setReadOnly(!isActiveDriver);
	                    }
	                    break;
	                case "cursor":
	                    Cursors.handleCursorUpdate(parsedMessage);
	                    break;
	                case "selection":
	                    Selections.handleSelectionUpdate(parsedMessage);
	                case "update":
	                    suppressEvents = true;
	                    if (parsedMessage.delta) {
	                        //code update
	                        doc.applyDeltas([parsedMessage.delta]);
	                    }
	                    else if (parsedMessage.code) {
	                        // initial pull of code on page load
	                        editor.setValue(parsedMessage.code);
	                        editor.clearSelection();
	                    }
	                    suppressEvents = false;
	                    break;
	                case "localGameTurn":
	                    writeToOutput(parsedMessage.text);
	                    break;
	                case "newLocalGame":
	                    document.getElementById("next").disabled = true;
	                    document.getElementById("console").innerHTML = "";
	                case "teamMemberDisconnect":
	                    Cursors.remove(parsedMessage.id);
	                    Selections.remove(parsedMessage.id);
	                    break;
	            }
	        });
	        if (isSpectator) {
	            document.getElementById('group').disabled = false;
	        }
	        if (!isSpectator) {
	            editor.session.on('change', function (delta) {
	                if (!suppressEvents && socket != null && isActiveDriver) {
	                    socket.send(JSON.stringify({ type: "update", delta: delta, code: editor.getValue() }));
	                }
	            });
	        }
	    });
	}
	function initialiseGroupSwitcher() {
	    var groupElement = document.getElementById('group');
	    groupElement.addEventListener("change", function onGroupChange() {
	        if (Cursors != null) {
	            Cursors.removeAll();
	        }
	        if (Selections != null) {
	            Selections.removeAll();
	        }
	        if (socket != null) {
	            socket.close();
	        }
	        document.getElementById("console").innerHTML = "";
	        groupElement.disabled = true;
	        groupName = groupElement.value;
	        initialiseCollaboration();
	    });
	}

	return client;

})();
