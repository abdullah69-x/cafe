import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    guests: 2,
    seatingArea: 'Window Booth',
    notes: '',
  });
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.date && formData.time) {
      setSuccess(true);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: new Date().toISOString().split('T')[0],
      time: '10:00',
      guests: 2,
      seatingArea: 'Window Booth',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#FFFDFB] rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-[#E2D8CD]">
        {/* Header */}
        <div className="bg-[#1C130E] text-[#F5EFEB] p-6 flex items-center justify-between border-b border-[#35251C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3B4A3F] flex items-center justify-center text-white border border-[#526657]">
              <Calendar className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">
                Reserve a Table
              </h3>
              <p className="text-[11px] text-[#A89689]">
                Warm seating at Bean & Leaf
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#A89689] hover:text-white hover:bg-[#2C1F18] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 rounded-full bg-[#EAF2EC] text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#29201B]">
                Table Reserved with Pleasure
              </h4>
              <p className="text-xs text-[#59463B] leading-relaxed max-w-sm mx-auto">
                We have reserved a spot for {formData.guests} {formData.guests > 1 ? 'guests' : 'guest'} on {formData.date} at {formData.time} in our {formData.seatingArea}. A confirmation note was sent to {formData.email}.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#8C5336] text-white text-xs font-semibold shadow-sm"
              >
                Wonderful, Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Maya Lin"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                  >
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                  >
                    <option value={1}>1 Person (Solo)</option>
                    <option value={2}>2 People</option>
                    <option value={3}>3 People</option>
                    <option value={4}>4 People</option>
                    <option value={6}>5–6 People</option>
                  </select>
                </div>
              </div>

              {/* Seating Area Preference */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                  Preferred Table Area
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'Window Booth', label: 'Window Booth' },
                    { id: 'Garden Patio', label: 'Garden Patio' },
                    { id: 'Quiet Corner', label: 'Quiet Corner' }
                  ].map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingArea: area.id })}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        formData.seatingArea === area.id
                          ? 'bg-[#3B4A3F] text-white border-[#3B4A3F] font-semibold'
                          : 'bg-[#FAF7F2] text-[#6D5A50] border-[#E2D8CC] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      {area.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="High chair needed, bringing a dog on the patio, quiet table for laptop work..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-[#29201B] text-xs focus:outline-none focus:border-[#8C5336]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#8C5336] hover:bg-[#9E603F] text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-md mt-2"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
