CREATE TABLE IF NOT EXISTS Players (
  p_sId           TEXT UNIQUE PRIMARY KEY,
  p_sDisplayName  TEXT NOT NULL,
  p_sNickName     TEXT NOT NULL UNIQUE,
  p_sPasswordHash TEXT NOT NULL,
  p_dtCreatedAt   TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Games (
  p_sId           TEXT UNIQUE PRIMARY KEY,
  -- p_sGameType     TEXT NOT NULL DEFAULT 'tic_tac_toe',
  p_sPlayerIdX    TEXT NOT NULL REFERENCES Players(p_sId),
  p_sPlayerIdO    TEXT NOT NULL REFERENCES Players(p_sId),
  p_sStartingMark TEXT NOT NULL,
  p_sStatus       TEXT NOT NULL DEFAULT 'in_progress',
  p_sWinnerId     TEXT REFERENCES Players(p_sId),
  p_dtCreatedAt   TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  p_dtFinishedAt  TEXT
);

CREATE TABLE IF NOT EXISTS Moves (
  p_sId         TEXT UNIQUE PRIMARY KEY,
  p_sGameId     TEXT NOT NULL REFERENCES Games(p_sId),
  p_sPlayerId   TEXT NOT NULL REFERENCES Players(p_sId),
  p_nMoveNumber INTEGER NOT NULL,
  p_nIndex      INTEGER NOT NULL,
  p_sMark       TEXT NOT NULL,
  UNIQUE(p_sGameId, p_nMoveNumber),
  UNIQUE(p_sGameId, p_nIndex)
);