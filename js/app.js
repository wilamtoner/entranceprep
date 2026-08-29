/**
 * EntrancePrep Studio - Core Application Logic
 */

class EntrancePrepApp {
  constructor() {
    this.questions = QUESTION_BANK || [];
    this.currentSubject = 'all';
    this.currentQuestionIdx = 0;
    this.score = 0;
    this.answeredCount = 0;

    this.notes = JSON.parse(localStorage.getItem('ep_notes')) || this.getSampleNotes();
    this.activeNoteId = this.notes[0] ? this.notes[0].id : null;

    this.flashcards = [
      { q: "What is Newton's Second Law of Motion?", a: "F = ma (Force equals mass times acceleration)" },
      { q: "What is the Ideal Gas Equation?", a: "PV = nRT" },
      { q: "Derivative of e^(ax)?", a: "a * e^(ax)" },
      { q: "What is the functional unit of human kidney?", a: "Nephron" },
      { q: "What is Ohm's Law?", a: "V = I * R (Voltage = Current * Resistance)" },
      { q: "Formula for Kinetic Energy?", a: "KE = 1/2 * m * v²" }
    ];
    this.flashcardIdx = 0;

    // Pomodoro Timer State
    this.timerSeconds = 25 * 60;
    this.timerRunning = false;
    this.timerInterval = null;

    this.init();
  }

  getSampleNotes() {
    return [
      {
        id: "note-1",
        title: "⚡ Physics: Key Mechanics Formulas",
        subject: "Physics",
        pinned: true,
        content: "# Physics Mechanics Quick Reference\n\n- **Newton's 2nd Law:** F = m * a\n- **Kinetic Energy:** KE = 1/2 * m * v²\n- **Gravitational Potential Energy:** PE = m * g * h\n- **Momentum:** p = m * v\n- **Centripetal Acceleration:** a_c = v² / r\n- **Work Done:** W = F * s * cos(θ)\n- **Power:** P = W / t",
        date: new Date().toLocaleDateString()
      },
      {
        id: "note-2",
        title: "🧪 Organic Chemistry Reaction Cheat Sheet",
        subject: "Chemistry",
        pinned: false,
        content: "# Organic Reactions\n\n1. **Markovnikov's Rule:** In addition of HX to asymmetrical alkene, H attaches to carbon with more H atoms.\n2. **Grignard Reagent:** R-Mg-X + H₂O → R-H + Mg(OH)X.\n3. **Aldol Condensation:** Carbonyl compounds with α-hydrogen in dilute alkali form β-hydroxy aldehydes.",
        date: new Date().toLocaleDateString()
      }
    ];
  }

  init() {
    this.initTheme();
    this.bindEvents();
    this.renderQuiz();
    this.renderNotesSidebar();
    this.loadActiveNote();
    this.renderFlashcard();
    this.updateStats();
  }

  initTheme() {
    const theme = localStorage.getItem('ep_theme') || 'light';
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    }
  }

  toggleTheme() {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('ep_theme', next);
    this.showToast(`Switched to ${next} theme 🌙`);
  }

  switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item-btn').forEach(b => b.classList.remove('active'));

    const activeView = document.getElementById(`view-${viewId}`);
    const activeBtn = document.getElementById(`nav-${viewId}`);

    if (activeView) activeView.classList.add('active');
    if (activeBtn) activeBtn.classList.add('active');
  }

  getFilteredQuestions() {
    if (this.currentSubject === 'all') return this.questions;
    return this.questions.filter(q => q.subject === this.currentSubject);
  }

  renderQuiz() {
    const filtered = this.getFilteredQuestions();
    const card = document.getElementById('quizCard');
    if (!card) return;

    if (filtered.length === 0 || this.currentQuestionIdx >= filtered.length) {
      card.innerHTML = `
        <div style="text-align: center; padding: 40px;">
          <div style="font-size: 48px; margin-bottom: 12px;">🎉</div>
          <h2>Section Complete!</h2>
          <p style="color: var(--text-muted); margin-bottom: 20px;">You scored ${this.score} points.</p>
          <button class="btn-accent" style="width: auto; margin: 0 auto;" onclick="app.resetQuiz()">Restart Practice</button>
        </div>
      `;
      return;
    }

    const q = filtered[this.currentQuestionIdx];
    card.innerHTML = `
      <div class="quiz-header">
        <span class="badge-tag badge-${q.subject}">${q.subject.toUpperCase()} · ${q.topic}</span>
        <span style="font-size: 13px; font-weight: 700; color: var(--text-muted);">
          Question ${this.currentQuestionIdx + 1} of ${filtered.length}
        </span>
      </div>

      <h3 class="question-text">${q.question}</h3>

      <div class="options-list">
        ${q.options.map((opt, idx) => `
          <button class="option-btn" id="opt-${idx}" onclick="app.checkAnswer(${idx})">
            <span style="width: 24px; height: 24px; border-radius: 50%; background: var(--bg-surface-soft); display: grid; place-items: center; font-size: 12px;">
              ${String.fromCharCode(65 + idx)}
            </span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <div class="explanation-box" id="explanationBox">
        <strong>💡 Explanation & Hint:</strong>
        <p style="margin-top: 6px; font-size: 14px;">${q.explanation}</p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
        <button class="pill-btn" onclick="app.prevQuestion()" ${this.currentQuestionIdx === 0 ? 'disabled style="opacity:0.5"' : ''}>← Previous</button>
        <button class="pill-btn" onclick="app.nextQuestion()">Next Question →</button>
      </div>
    `;
  }

  checkAnswer(selectedIdx) {
    const filtered = this.getFilteredQuestions();
    const q = filtered[this.currentQuestionIdx];
    if (!q) return;

    const selectedBtn = document.getElementById(`opt-${selectedIdx}`);
    const correctBtn = document.getElementById(`opt-${q.answer}`);
    const explanationBox = document.getElementById('explanationBox');

    // Disable all options
    document.querySelectorAll('.option-btn').forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedIdx === q.answer) {
      if (selectedBtn) selectedBtn.classList.add('correct');
      this.score += 10;
      this.showToast('✨ Correct Answer! +10 pts');
    } else {
      if (selectedBtn) selectedBtn.classList.add('incorrect');
      if (correctBtn) correctBtn.classList.add('correct');
      this.showToast('❌ Incorrect Answer');
    }

    if (explanationBox) explanationBox.classList.add('active');
    this.answeredCount++;
    this.updateStats();
  }

  nextQuestion() {
    const filtered = this.getFilteredQuestions();
    if (this.currentQuestionIdx < filtered.length - 1) {
      this.currentQuestionIdx++;
      this.renderQuiz();
    } else {
      this.currentQuestionIdx = filtered.length;
      this.renderQuiz();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIdx > 0) {
      this.currentQuestionIdx--;
      this.renderQuiz();
    }
  }

  resetQuiz() {
    this.currentQuestionIdx = 0;
    this.score = 0;
    this.renderQuiz();
    this.updateStats();
  }

  // Notes Studio Engine
  renderNotesSidebar() {
    const listEl = document.getElementById('notesList');
    if (!listEl) return;

    if (this.notes.length === 0) {
      listEl.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px;">No notes yet.</div>';
      return;
    }

    listEl.innerHTML = this.notes.map(note => `
      <div class="note-item-card ${note.id === this.activeNoteId ? 'active' : ''}" onclick="app.selectNote('${note.id}')">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-size: 11px; font-weight: 800; color: var(--brand-primary);">${note.subject}</span>
          ${note.pinned ? '📌' : ''}
        </div>
        <strong style="font-size: 14px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${note.title}</strong>
        <span style="font-size: 11px; color: var(--text-muted);">${note.date}</span>
      </div>
    `).join('');
  }

  selectNote(noteId) {
    this.saveCurrentNoteState();
    this.activeNoteId = noteId;
    this.renderNotesSidebar();
    this.loadActiveNote();
  }

  loadActiveNote() {
    const note = this.notes.find(n => n.id === this.activeNoteId);
    const titleInput = document.getElementById('noteTitleInput');
    const contentArea = document.getElementById('noteContentArea');
    const subjectSelect = document.getElementById('noteSubjectSelect');

    if (note && titleInput && contentArea) {
      titleInput.value = note.title;
      contentArea.value = note.content;
      if (subjectSelect) subjectSelect.value = note.subject || 'General';
    }
  }

  createNewNote() {
    const newNote = {
      id: 'note-' + Date.now(),
      title: 'Untitled Note',
      subject: 'General',
      pinned: false,
      content: '',
      date: new Date().toLocaleDateString()
    };
    this.notes.unshift(newNote);
    this.activeNoteId = newNote.id;
    this.saveNotesToStorage();
    this.renderNotesSidebar();
    this.loadActiveNote();
    this.showToast('Created new note 📝');
  }

  saveCurrentNoteState() {
    const note = this.notes.find(n => n.id === this.activeNoteId);
    const titleInput = document.getElementById('noteTitleInput');
    const contentArea = document.getElementById('noteContentArea');
    const subjectSelect = document.getElementById('noteSubjectSelect');

    if (note && titleInput && contentArea) {
      note.title = titleInput.value.trim() || 'Untitled Note';
      note.content = contentArea.value;
      if (subjectSelect) note.subject = subjectSelect.value;
      this.saveNotesToStorage();
    }
  }

  saveNotesToStorage() {
    localStorage.setItem('ep_notes', JSON.stringify(this.notes));
    this.updateStats();
  }

  exportCurrentNote() {
    this.saveCurrentNoteState();
    const note = this.notes.find(n => n.id === this.activeNoteId);
    if (!note) return;

    const blob = new Blob([note.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${note.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('Exported note as Markdown file 📥');
  }

  // Flashcards Deck
  renderFlashcard() {
    const card = this.flashcards[this.flashcardIdx];
    const frontEl = document.getElementById('flashFront');
    const backEl = document.getElementById('flashBack');
    const countEl = document.getElementById('flashCount');

    if (frontEl) frontEl.textContent = card.q;
    if (backEl) backEl.textContent = card.a;
    if (countEl) countEl.textContent = `Card ${this.flashcardIdx + 1} of ${this.flashcards.length}`;

    const inner = document.getElementById('flashInner');
    if (inner) inner.classList.remove('flipped');
  }

  flipFlashcard() {
    const inner = document.getElementById('flashInner');
    if (inner) inner.classList.toggle('flipped');
  }

  nextFlashcard() {
    this.flashcardIdx = (this.flashcardIdx + 1) % this.flashcards.length;
    this.renderFlashcard();
  }

  prevFlashcard() {
    this.flashcardIdx = (this.flashcardIdx - 1 + this.flashcards.length) % this.flashcards.length;
    this.renderFlashcard();
  }

  // Pomodoro Timer Engine
  toggleTimer() {
    if (this.timerRunning) {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
      document.getElementById('timerToggleBtn').textContent = '▶ Start Timer';
    } else {
      this.timerRunning = true;
      document.getElementById('timerToggleBtn').textContent = '⏸ Pause Timer';
      this.timerInterval = setInterval(() => {
        if (this.timerSeconds > 0) {
          this.timerSeconds--;
          this.renderTimer();
        } else {
          clearInterval(this.timerInterval);
          this.timerRunning = false;
          this.showToast('🔔 Pomodoro Focus Session Complete! Take a 5-min break.');
          this.timerSeconds = 25 * 60;
          this.renderTimer();
        }
      }, 1000);
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerRunning = false;
    this.timerSeconds = 25 * 60;
    this.renderTimer();
    document.getElementById('timerToggleBtn').textContent = '▶ Start Timer';
  }

  renderTimer() {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const displayEl = document.getElementById('timerDisplay');
    if (displayEl) displayEl.textContent = timeStr;
  }

  updateStats() {
    const scoreEl = document.getElementById('headerScore');
    const notesCountEl = document.getElementById('headerNotesCount');
    if (scoreEl) scoreEl.textContent = `${this.score} pts`;
    if (notesCountEl) notesCountEl.textContent = `${this.notes.length} Notes`;
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>📚</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  bindEvents() {
    // Subject filter pills
    document.querySelectorAll('.subject-filter-pills .pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.subject-filter-pills .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentSubject = btn.dataset.subject;
        this.currentQuestionIdx = 0;
        this.renderQuiz();
      });
    });

    // Auto-save active note on input
    const titleInput = document.getElementById('noteTitleInput');
    const contentArea = document.getElementById('noteContentArea');
    if (titleInput) titleInput.addEventListener('input', () => this.saveCurrentNoteState());
    if (contentArea) contentArea.addEventListener('input', () => this.saveCurrentNoteState());
  }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new EntrancePrepApp();
  window.app = app;
});
