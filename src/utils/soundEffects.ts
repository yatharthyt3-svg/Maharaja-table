// Web Audio API ambient sitar & tanpura resonance synthesizer
class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  public init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    } catch {
      console.warn("Web Audio API not supported in this browser");
    }
  }

  public playChime() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Royal harmonic frequency (A4 harmonic pentatonic)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch {
      // Ignore audio failure if user hasn't interacted
    }
  }

  public toggleDrone(): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.stopDrone();
      return false;
    } else {
      this.startDrone();
      return true;
    }
  }

  private startDrone() {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    
    // Tanpura root note: D3 (146.83 Hz) & Pa (A3 220 Hz)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc2 = this.ctx.createOscillator();
    this.gainNode = this.ctx.createGain();

    this.droneOsc1.type = 'triangle';
    this.droneOsc1.frequency.setValueAtTime(146.83, now); // Root D3

    this.droneOsc2.type = 'sine';
    this.droneOsc2.frequency.setValueAtTime(220.00, now); // Fifth A3

    this.gainNode.gain.setValueAtTime(0.001, now);
    this.gainNode.gain.linearRampToValueAtTime(0.04, now + 3);

    this.droneOsc1.connect(this.gainNode);
    this.droneOsc2.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    this.droneOsc1.start();
    this.droneOsc2.start();
    this.isPlaying = true;
  }

  private stopDrone() {
    if (!this.gainNode || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.gainNode.gain.linearRampToValueAtTime(0.0001, now + 1.5);
    setTimeout(() => {
      try {
        this.droneOsc1?.stop();
        this.droneOsc2?.stop();
        this.droneOsc1?.disconnect();
        this.droneOsc2?.disconnect();
      } catch {
        // Safe cleanup
      }
      this.isPlaying = false;
    }, 1500);
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientAudioController();
