pub struct Task {
    id: u32,
    priority: u8, // 0-255, 0 is highest priority
    expected_duration: u64,
    time_executed: u64, // The actual task to be executed
    work: Box<dyn FnMut() -> TaskResult<(), String>>,
    completed: bool,
    state: TaskState,
    interactive_score: f32
}

pub enum TaskState {
    Ready, 
    Running, 
    Blocked,
    Finished,
}

pub enum TaskResult {
    Completed,
    NeedsMoreTime, 
    Blocked,
    Error(String),
}





