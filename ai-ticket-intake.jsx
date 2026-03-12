import { useState, useEffect, useRef } from "react";

const theme = {
  bg: "#0f1117",
  surface: "#1a1d27",
  surfaceHigh: "#22263a",
  border: "#2e3350",
  accent: "#4f8ef7",
  accentGlow: "rgba(79,142,247,0.15)",
  success: "#34d399",
  warning: "#fbbf24",
  danger: "#f87171",
  text: "#e2e8f0",
  textMuted: "#64748b",
  textDim: "#94a3b8",
};

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: theme.bg,
    fontFamily: "'DM Mono', 'Courier New', monospace",
    color: theme.text,
    padding: "0",
  },
  header: {
    borderBottom: `1px solid ${theme.border}`,
    padding: "20px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.surface,
  },
  logo: {
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.15em",
    color: theme.accent,
    textTransform: "uppercase",
  },
  badge: {
    fontSize: "10px",
    backgroundColor: theme.accentGlow,
    color: theme.accent,
    border: `1px solid ${theme.accent}`,
    padding: "3px 10px",
    borderRadius: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  tabs: {
    display: "flex",
    borderBottom: `1px solid ${theme.border}`,
    padding: "0 32px",
    backgroundColor: theme.surface,
    gap: "4px",
  },
  tab: (active) => ({
    padding: "14px 20px",
    fontSize: "12px",
    fontWeight: active ? "700" : "400",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    color: active ? theme.accent : theme.textMuted,
    borderBottom: active ? `2px solid ${theme.accent}` : "2px solid transparent",
    transition: "all 0.2s",
    marginBottom: "-1px",
  }),
  main: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 32px",
  },
  card: {
    backgroundColor: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: "12px",
    padding: "28px",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: theme.textMuted,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  input: {
    width: "100%",
    backgroundColor: theme.surfaceHigh,
    border: `1px solid ${theme.border}`,
    borderRadius: "8px",
    padding: "12px 16px",
    color: theme.text,
    fontSize: "13px",
    fontFamily: "'DM Mono', monospace",
    outline: "none",
    boxSizing: "border-box",
    resize: "none",
  },
  label: {
    fontSize: "11px",
    color: theme.textMuted,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  field: {
    marginBottom: "16px",
  },
  aiBox: {
    backgroundColor: theme.accentGlow,
    border: `1px solid ${theme.accent}`,
    borderRadius: "10px",
    padding: "16px 20px",
    marginTop: "16px",
  },
  aiLabel: {
    fontSize: "10px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: theme.accent,
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  suggestionRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: `1px solid rgba(79,142,247,0.1)`,
  },
  suggestionKey: {
    fontSize: "11px",
    color: theme.textMuted,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    width: "120px",
  },
  suggestionVal: {
    fontSize: "13px",
    color: theme.text,
    flex: 1,
  },
  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
  },
  btn: (variant) => ({
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "12px",
    fontFamily: "'DM Mono', monospace",
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    backgroundColor:
      variant === "primary"
        ? theme.accent
        : variant === "success"
        ? theme.success
        : variant === "warning"
        ? "rgba(251,191,36,0.15)"
        : "rgba(255,255,255,0.05)",
    color:
      variant === "primary"
        ? "#fff"
        : variant === "success"
        ? "#fff"
        : variant === "warning"
        ? theme.warning
        : theme.textDim,
    transition: "all 0.2s",
  }),
  warningBox: {
    backgroundColor: "rgba(251,191,36,0.08)",
    border: `1px solid ${theme.warning}`,
    borderRadius: "10px",
    padding: "16px 20px",
    marginTop: "16px",
  },
  successBox: {
    backgroundColor: "rgba(52,211,153,0.08)",
    border: `1px solid ${theme.success}`,
    borderRadius: "10px",
    padding: "16px 20px",
    marginTop: "16px",
  },
  dangerBox: {
    backgroundColor: "rgba(248,113,113,0.08)",
    border: `1px solid ${theme.danger}`,
    borderRadius: "10px",
    padding: "16px 20px",
    marginTop: "16px",
  },
  pill: (color) => ({
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "700",
    backgroundColor:
      color === "blue"
        ? theme.accentGlow
        : color === "green"
        ? "rgba(52,211,153,0.15)"
        : color === "yellow"
        ? "rgba(251,191,36,0.15)"
        : "rgba(248,113,113,0.15)",
    color:
      color === "blue"
        ? theme.accent
        : color === "green"
        ? theme.success
        : color === "yellow"
        ? theme.warning
        : theme.danger,
    border: `1px solid ${
      color === "blue"
        ? theme.accent
        : color === "green"
        ? theme.success
        : color === "yellow"
        ? theme.warning
        : theme.danger
    }`,
  }),
  divider: {
    borderTop: `1px solid ${theme.border}`,
    margin: "20px 0",
  },
  chatBubble: (isAi) => ({
    display: "flex",
    justifyContent: isAi ? "flex-start" : "flex-end",
    marginBottom: "12px",
  }),
  bubble: (isAi) => ({
    maxWidth: "75%",
    padding: "12px 16px",
    borderRadius: isAi ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
    backgroundColor: isAi ? theme.surfaceHigh : theme.accentGlow,
    border: `1px solid ${isAi ? theme.border : theme.accent}`,
    fontSize: "13px",
    lineHeight: "1.6",
    color: isAi ? theme.text : theme.text,
  }),
  bubbleLabel: (isAi) => ({
    fontSize: "10px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: isAi ? theme.accent : theme.textMuted,
    marginBottom: "6px",
  }),
  alertRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    padding: "16px",
    backgroundColor: theme.surfaceHigh,
    borderRadius: "8px",
    marginBottom: "12px",
    border: `1px solid ${theme.border}`,
  },
  alertIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    flexShrink: 0,
  },
  statusDot: (color) => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor:
      color === "green"
        ? theme.success
        : color === "yellow"
        ? theme.warning
        : theme.danger,
    display: "inline-block",
    marginRight: "6px",
  }),
};

// ─── FLOW 1: Phone Call Intake ───────────────────────────────────────────────
function PhoneFlow() {
  const [description, setDescription] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showDuplicate, setShowDuplicate] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [duplicateChoice, setDuplicateChoice] = useState(null);
  const timerRef = useRef(null);

  const suggestions = {
    Type: "Incident",
    "Sub-type": "Application / Email Client",
    Priority: "Priority 3 — Medium",
    Board: "Service Desk",
    Summary: "Outlook crashing post-update on client workstation",
  };

  useEffect(() => {
    if (description.length > 20) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowSuggestions(true), 800);
    } else {
      setShowSuggestions(false);
      setShowDuplicate(false);
      setShowValidation(false);
    }
  }, [description]);

  const handleAccept = () => {
    setAccepted(true);
    setTimeout(() => setShowDuplicate(true), 400);
  };

  const handleDuplicate = (choice) => {
    setDuplicateChoice(choice);
    setTimeout(() => setShowValidation(true), 400);
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div style={styles.successBox}>
        <div style={{ ...styles.aiLabel, color: theme.success }}>
          ✅ Ticket Created Successfully
        </div>
        <div style={{ fontSize: "13px", lineHeight: "1.8" }}>
          <div><span style={{ color: theme.textMuted }}>Ticket ID:</span> &nbsp;#100101</div>
          <div><span style={{ color: theme.textMuted }}>Summary:</span> &nbsp;Outlook crashing post-update on client workstation</div>
          <div><span style={{ color: theme.textMuted }}>Type:</span> &nbsp;Incident — Application / Email Client</div>
          <div><span style={{ color: theme.textMuted }}>Priority:</span> &nbsp;<span style={styles.pill("yellow")}>Medium</span></div>
          <div><span style={{ color: theme.textMuted }}>Board:</span> &nbsp;Service Desk</div>
          <div style={{ marginTop: "12px", fontSize: "11px", color: theme.textMuted }}>
            ⏱ Created in ~45 seconds &nbsp;|&nbsp; 🤖 AI assist used &nbsp;|&nbsp; 👤 Human confirmed
          </div>
        </div>
        <button style={{ ...styles.btn("warning"), marginTop: "16px" }} onClick={() => { setSubmitted(false); setDescription(""); setShowSuggestions(false); setShowDuplicate(false); setShowValidation(false); setAccepted(false); setDuplicateChoice(null); }}>
          ↩ Reset Demo
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={styles.card}>
        <div style={styles.cardTitle}>
          <span>📞</span> Step 1 — Technician Describes the Issue
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Issue Description</label>
          <textarea
            rows={3}
            style={styles.input}
            placeholder="Type a description of the issue (e.g. Outlook keeps crashing after update...)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={{ fontSize: "11px", color: theme.textMuted }}>
          {description.length < 20 ? `Type at least ${20 - description.length} more characters to trigger AI assist...` : "🤖 AI is analyzing..."}
        </div>
      </div>

      {showSuggestions && (
        <div style={styles.card}>
          <div style={styles.cardTitle}><span>🤖</span> Step 2 — AI Field Suggestions</div>
          <div style={styles.aiBox}>
            <div style={styles.aiLabel}>⚡ AI Suggestions — Real Time</div>
            {Object.entries(suggestions).map(([k, v]) => (
              <div key={k} style={styles.suggestionRow}>
                <span style={styles.suggestionKey}>{k}</span>
                <span style={styles.suggestionVal}>{v}</span>
                <span style={{ ...styles.pill("blue"), fontSize: "10px" }}>AI</span>
              </div>
            ))}
            <div style={{ fontSize: "11px", color: theme.textMuted, marginTop: "12px" }}>
              💡 Suggested because: similar tickets with "Outlook" + "crash" keywords resolved as Application Incidents 87% of the time
            </div>
          </div>
          {!accepted ? (
            <div style={styles.btnRow}>
              <button style={styles.btn("primary")} onClick={handleAccept}>✅ Accept All</button>
              <button style={styles.btn("default")} onClick={handleAccept}>✏️ Edit Fields</button>
              <button style={styles.btn("default")} onClick={() => setShowSuggestions(false)}>❌ Dismiss</button>
            </div>
          ) : (
            <div style={{ marginTop: "12px", fontSize: "12px", color: theme.success }}>✅ Suggestions accepted</div>
          )}
        </div>
      )}

      {showDuplicate && (
        <div style={styles.card}>
          <div style={styles.cardTitle}><span>🔍</span> Step 3 — Duplicate Detection</div>
          <div style={styles.warningBox}>
            <div style={{ ...styles.aiLabel, color: theme.warning }}>⚠️ Possible Duplicate Found</div>
            <div style={{ fontSize: "13px", lineHeight: "1.8" }}>
              <div><span style={{ color: theme.textMuted }}>Ticket:</span> &nbsp;#99821 — Outlook issue, same client</div>
              <div><span style={{ color: theme.textMuted }}>Created:</span> &nbsp;3 hours ago</div>
              <div><span style={{ color: theme.textMuted }}>Status:</span> &nbsp;<span style={styles.pill("yellow")}>Open</span></div>
            </div>
          </div>
          {!duplicateChoice ? (
            <div style={styles.btnRow}>
              <button style={styles.btn("warning")} onClick={() => handleDuplicate("link")}>🔁 Link to Existing</button>
              <button style={styles.btn("default")} onClick={() => handleDuplicate("new")}>📝 Create New Anyway</button>
              <button style={styles.btn("default")} onClick={() => handleDuplicate("suppress")}>❌ Suppress</button>
            </div>
          ) : (
            <div style={{ marginTop: "12px", fontSize: "12px", color: theme.success }}>
              ✅ {duplicateChoice === "link" ? "Linked to existing ticket #99821" : duplicateChoice === "new" ? "Creating new ticket" : "Ticket suppressed"}
            </div>
          )}
        </div>
      )}

      {showValidation && duplicateChoice !== "suppress" && (
        <div style={styles.card}>
          <div style={styles.cardTitle}><span>✔️</span> Step 4 — Validation & Submit</div>
          <div style={styles.successBox}>
            <div style={{ ...styles.aiLabel, color: theme.success }}>✅ All Required Fields Complete</div>
            <div style={{ fontSize: "13px", lineHeight: "1.8" }}>
              <div>✅ Type — Incident</div>
              <div>✅ Sub-type — Application / Email Client</div>
              <div>✅ Priority — Medium</div>
              <div>✅ Board — Service Desk</div>
              <div>✅ Contact — Sarah Chen (matched from CW history)</div>
            </div>
          </div>
          <div style={styles.btnRow}>
            <button style={styles.btn("success")} onClick={handleSubmit}>🚀 Submit to ConnectWise</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── FLOW 2: Portal Intake ───────────────────────────────────────────────────
function PortalFlow() {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { isAi: true, text: "Hi! What do you need help with today? Describe it in your own words — no tech jargon needed 😊" }
  ]);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const responses = [
    {
      userMsg: null,
      aiMsg: "Got it — sounds like a performance issue. A couple of quick questions:\n\n1. Is it slow on startup, during specific apps, or all the time?\n2. Has anything changed recently — updates, new software, or a reboot?",
    },
    {
      userMsg: null,
      aiMsg: "Thanks! Here's what I'm submitting on your behalf:\n\n📋 Issue: Workstation running slow since this morning\n🏷 Type: Incident — Workstation / Performance\n⚡ Priority: Medium\n⏱ Expected response: Within 4 hours\n\nDoes this look right?",
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { isAi: false, text: input }];
    setInput("");

    if (step < responses.length) {
      setTimeout(() => {
        setMessages([...newMessages, { isAi: true, text: responses[step].aiMsg }]);
        setStep(step + 1);
      }, 800);
    }
    setMessages(newMessages);
  };

  if (submitted) {
    return (
      <div style={styles.successBox}>
        <div style={{ ...styles.aiLabel, color: theme.success }}>🎫 Ticket #100102 Created</div>
        <div style={{ fontSize: "13px", lineHeight: "1.8" }}>
          <div>We'll be in touch within <strong>4 hours</strong></div>
          <div style={{ marginTop: "8px", color: theme.textMuted }}>Track your ticket: <span style={{ color: theme.accent }}>#100102 →</span></div>
        </div>
        <button style={{ ...styles.btn("warning"), marginTop: "16px" }} onClick={() => { setSubmitted(false); setStep(0); setMessages([{ isAi: true, text: "Hi! What do you need help with today? Describe it in your own words — no tech jargon needed 😊" }]); }}>
          ↩ Reset Demo
        </button>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}><span>🌐</span> Client Portal — End User View</div>

      <div style={{ marginBottom: "20px" }}>
        {messages.map((m, i) => (
          <div key={i} style={styles.chatBubble(m.isAi)}>
            <div>
              <div style={styles.bubbleLabel(m.isAi)}>{m.isAi ? "🤖 AI Assistant" : "👤 Sarah (End User)"}</div>
              <div style={styles.bubble(m.isAi)}>{m.text.split("\n").map((line, j) => <div key={j}>{line}</div>)}</div>
            </div>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div style={styles.warningBox}>
          <div style={{ ...styles.aiLabel, color: theme.warning }}>⚠️ Possible Duplicate Detected</div>
          <div style={{ fontSize: "13px" }}>You submitted a similar ticket 2 days ago — <span style={{ color: theme.accent }}>#99654</span> (still open). Add to that ticket instead?</div>
          <div style={styles.btnRow}>
            <button style={styles.btn("warning")} onClick={() => setMessages([...messages, { isAi: true, text: "Got it — I've added your update to ticket #99654. A technician will follow up shortly!" }])}>
              🔁 Add to Existing
            </button>
            <button style={styles.btn("default")} onClick={() => {}}>📝 Create New</button>
          </div>
        </div>
      )}

      {step >= 2 && !submitted && (
        <div style={styles.btnRow}>
          <button style={styles.btn("success")} onClick={() => setSubmitted(true)}>✅ Confirm & Submit</button>
          <button style={styles.btn("default")} onClick={() => {}}>✏️ Edit</button>
        </div>
      )}

      {step < 2 && (
        <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
          <input
            style={{ ...styles.input, marginBottom: 0 }}
            placeholder="Type your reply..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button style={{ ...styles.btn("primary"), whiteSpace: "nowrap" }} onClick={handleSend}>Send →</button>
        </div>
      )}
    </div>
  );
}

// ─── FLOW 3: RMM Alert Normalization ─────────────────────────────────────────
function RMMFlow() {
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    {
      raw: "TW - Enable USB Wall FAILED for Company 005\\Site 027\\SUR-64-01:242235 -",
      type: "Security Policy",
      recurrence: 4,
      normalized: "USB security policy failed on workstation SUR-64-01 at Company 005, Site 27 — 4th occurrence this week",
      priority: "High",
      priorityColor: "red",
      action: "escalated",
    },
    {
      raw: "Perf - Processor % User Time:74113 - AITH-BKUP-04 425 Processor-% User Time-_Total",
      type: "Performance",
      recurrence: 1,
      normalized: "High CPU usage detected on backup server AITH-BKUP-04 — Processor utilization above threshold",
      priority: "Medium",
      priorityColor: "yellow",
      action: "normalized",
    },
    {
      raw: "AIT DRV C: - Server Free Space Remaining < 5 GB:186599 - SOU-DC-01 2186 C",
      type: "Disk Space",
      recurrence: 2,
      normalized: "Critical: C: drive below 5GB on domain controller SOU-DC-01 — immediate attention required",
      priority: "High",
      priorityColor: "red",
      action: "normalized",
    },
    {
      raw: "TW - Enable USB Wall FAILED for Company 005\\Site 027\\SUR-64-01:242235 -",
      type: "Security Policy",
      recurrence: 4,
      normalized: "Duplicate of alert above — suppressed",
      priority: "Suppressed",
      priorityColor: "blue",
      action: "suppressed",
    },
  ];

  const handleProcess = () => {
    setProcessing(true);
    setTimeout(() => { setProcessing(false); setDone(true); }, 1800);
  };

  return (
    <div>
      <div style={styles.card}>
        <div style={styles.cardTitle}><span>🤖</span> Incoming RMM Alerts — Raw Feed</div>
        {alerts.map((a, i) => (
          <div
            key={i}
            style={{ ...styles.alertRow, cursor: "pointer", border: selectedAlert === i ? `1px solid ${theme.accent}` : `1px solid ${theme.border}` }}
            onClick={() => setSelectedAlert(selectedAlert === i ? null : i)}
          >
            <div style={{ ...styles.alertIcon, backgroundColor: theme.surfaceHigh }}>
              {a.type === "Security Policy" ? "🔒" : a.type === "Performance" ? "⚡" : "💾"}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "11px", color: theme.textMuted, marginBottom: "4px", fontFamily: "monospace" }}>
                {a.raw.length > 60 ? a.raw.substring(0, 60) + "..." : a.raw}
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={styles.pill("blue")}>{a.type}</span>
                {a.recurrence > 2 && <span style={styles.pill("red")}>🔁 {a.recurrence}x this week</span>}
              </div>
            </div>
          </div>
        ))}

        {!done ? (
          <button style={{ ...styles.btn("primary"), marginTop: "8px" }} onClick={handleProcess} disabled={processing}>
            {processing ? "⏳ Processing..." : "🤖 Run AI Normalization"}
          </button>
        ) : null}
      </div>

      {done && (
        <div style={styles.card}>
          <div style={styles.cardTitle}><span>✨</span> After AI Normalization</div>
          {alerts.map((a, i) => (
            <div key={i} style={{ ...styles.alertRow, borderColor: a.action === "suppressed" ? theme.border : a.priorityColor === "red" ? theme.danger : a.priorityColor === "yellow" ? theme.warning : theme.accent }}>
              <div style={{ ...styles.alertIcon, backgroundColor: a.action === "suppressed" ? theme.surfaceHigh : a.priorityColor === "red" ? "rgba(248,113,113,0.1)" : "rgba(251,191,36,0.1)" }}>
                {a.action === "suppressed" ? "🚫" : a.action === "escalated" ? "🔺" : "✅"}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", marginBottom: "6px", color: a.action === "suppressed" ? theme.textMuted : theme.text }}>
                  {a.normalized}
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <span style={styles.pill(a.priorityColor === "red" ? "red" : a.priorityColor === "yellow" ? "yellow" : "blue")}>
                    {a.priority}
                  </span>
                  <span style={styles.pill("blue")}>{a.type}</span>
                  {a.action === "escalated" && <span style={styles.pill("red")}>🔺 Auto-escalated</span>}
                  {a.action === "suppressed" && <span style={styles.pill("blue")}>🚫 Duplicate suppressed</span>}
                </div>
              </div>
            </div>
          ))}

          <div style={styles.divider} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px" }}>
            {[
              { label: "Alerts In", val: "4", color: "blue" },
              { label: "Tickets Created", val: "3", color: "green" },
              { label: "Suppressed", val: "1", color: "yellow" },
              { label: "Escalated", val: "1", color: "red" },
            ].map((s) => (
              <div key={s.label} style={{ ...styles.card, padding: "16px", marginBottom: 0, textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: "700", color: s.color === "blue" ? theme.accent : s.color === "green" ? theme.success : s.color === "yellow" ? theme.warning : theme.danger }}>{s.val}</div>
                <div style={{ fontSize: "10px", color: theme.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <button style={{ ...styles.btn("warning"), marginTop: "16px" }} onClick={() => setDone(false)}>
            ↩ Reset Demo
          </button>
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "📞 Phone Intake", subtitle: "Technician Flow" },
    { label: "🌐 Portal Intake", subtitle: "End User Flow" },
    { label: "🤖 RMM Alerts", subtitle: "Auto-normalization" },
  ];

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <div>
          <div style={styles.logo}>MSPbots — AI Ticket Intake</div>
          <div style={{ fontSize: "11px", color: theme.textMuted, marginTop: "2px" }}>ConnectWise · V1 Prototype</div>
        </div>
        <div style={styles.badge}>Prototype V1</div>
      </div>

      <div style={styles.tabs}>
        {tabs.map((t, i) => (
          <button key={i} style={styles.tab(activeTab === i)} onClick={() => setActiveTab(i)}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={styles.main}>
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "18px", fontWeight: "700", marginBottom: "6px" }}>
            {tabs[activeTab].label}
          </div>
          <div style={{ fontSize: "12px", color: theme.textMuted }}>
            {activeTab === 0 && "Technician creates a ticket from a phone call — AI suggests fields, detects duplicates, and validates before submission."}
            {activeTab === 1 && "End user submits via portal in plain language — AI guides conversationally, maps to CW fields, and detects duplicates."}
            {activeTab === 2 && "RMM alerts are intercepted, normalized into human-readable summaries, deduplicated, and correctly prioritized."}
          </div>
        </div>

        {activeTab === 0 && <PhoneFlow />}
        {activeTab === 1 && <PortalFlow />}
        {activeTab === 2 && <RMMFlow />}
      </div>
    </div>
  );
}
